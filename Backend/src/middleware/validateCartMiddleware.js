exports.validateCartInput = (req, res, next) => {
    const { user_id, product_id, quantity } = req.body;

    if (!user_id || !product_id || !quantity) {
        return res.status(400).json({ message: "User ID, Product ID, and Quantity are required." });
    }

    if (quantity <= 0) {
        return res.status(400).json({ message: "Quantity must be greater than zero." });
    }

    next();
};
