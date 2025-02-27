const pool = require("../DbConnections/postgresdb");

// Get all payments
exports.getAllPayments = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM payments ORDER BY id ASC");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get payment by ID
exports.getPaymentById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM payments WHERE id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Payment not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new payment
exports.createPayment = async (req, res) => {
    try {
        const { user_id, order_id, amount, payment_method, payment_status } = req.body;

        const result = await pool.query(
            "INSERT INTO payments (user_id, order_id, amount, payment_method, payment_status) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [user_id, order_id, amount, payment_method, payment_status]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a payment
exports.updatePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, payment_method, payment_status } = req.body;

        const result = await pool.query(
            "UPDATE payments SET amount = $1, payment_method = $2, payment_status = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *",
            [amount, payment_method, payment_status, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Payment not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a payment
exports.deletePayment = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM payments WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Payment not found" });
        }

        res.status(200).json({ message: "Payment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
