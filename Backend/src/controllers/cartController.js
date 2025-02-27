const pool = require("../DbConnections/postgresdb");

// Get all cart items
exports.getAllCartItems = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT cart.*, users.name AS user_name, products.name AS product_name 
            FROM cart
            JOIN users ON cart.user_id = users.id
            JOIN products ON cart.product_id = products.id
            ORDER BY cart.id ASC
        `);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get cart items for a specific user
exports.getCartByUserId = async (req, res) => {
    try {
        const { user_id } = req.params;
        const result = await pool.query(
            "SELECT * FROM cart WHERE user_id = $1",
            [user_id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "No cart items found for this user" });
        }

        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add item to cart
exports.addToCart = async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;

        const result = await pool.query(
            "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *",
            [user_id, product_id, quantity]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update cart item quantity
exports.updateCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        const result = await pool.query(
            "UPDATE cart SET quantity = $1 WHERE id = $2 RETURNING *",
            [quantity, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Remove item from cart
exports.deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM cart WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json({ message: "Cart item deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Clear cart for a user
exports.clearCart = async (req, res) => {
    try {
        const { user_id } = req.params;

        await pool.query("DELETE FROM cart WHERE user_id = $1", [user_id]);

        res.status(200).json({ message: "Cart cleared successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
