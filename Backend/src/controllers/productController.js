const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pool = require("../DbConnections/postgresdb");

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new product with image upload
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, category_id } = req.body;
        const image_url = req.file ? `/uploads/${req.file.filename}` : null; // Store image path

        const result = await pool.query(
            "INSERT INTO products (name, description, price, stock, category_id, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [name, description, price, stock, category_id, image_url]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a product (with optional image update)
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock, category_id } = req.body;
        let image_url = req.file ? `/uploads/${req.file.filename}` : null;

        // Get the existing product
        const productResult = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

        if (productResult.rows.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Keep the old image if no new one is uploaded
        if (!image_url) {
            image_url = productResult.rows[0].image_url;
        } else {
            // Delete old image if exists
            if (productResult.rows[0].image_url) {
                const oldImagePath = `.${productResult.rows[0].image_url}`;
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
        }

        const result = await pool.query(
            "UPDATE products SET name = $1, description = $2, price = $3, stock = $4, category_id = $5, image_url = $6 WHERE id = $7 RETURNING *",
            [name, description, price, stock, category_id, image_url, id]
        );

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a product and remove image from storage
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // Get the existing product
        const productResult = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

        if (productResult.rows.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Delete image file if exists
        if (productResult.rows[0].image_url) {
            const imagePath = `.${productResult.rows[0].image_url}`;
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        // Delete product from database
        await pool.query("DELETE FROM products WHERE id = $1", [id]);

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Export multer upload middleware
exports.upload = upload;
