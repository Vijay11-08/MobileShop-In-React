const pool = require("../DbConnections/postgresdb");

// Get all order items
exports.getAllOrderItems = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM order_items ORDER BY id ASC");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get order item by ID
exports.getOrderItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM order_items WHERE id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Order item not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new order item
exports.createOrderItem = async (req, res) => {
    try {
        const { order_id, product_id, quantity, price } = req.body;

        const result = await pool.query(
            "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *",
            [order_id, product_id, quantity, price]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an order item
exports.updateOrderItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity, price } = req.body;

        const result = await pool.query(
            "UPDATE order_items SET quantity = $1, price = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
            [quantity, price, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Order item not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an order item
exports.deleteOrderItem = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM order_items WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Order item not found" });
        }

        res.status(200).json({ message: "Order item deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
