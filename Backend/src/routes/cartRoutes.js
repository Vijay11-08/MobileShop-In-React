const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// Routes For Cart Controller
router.get("/cart", cartController.getAllCartItems); // Get all cart items
router.get("/cart/:user_id", cartController.getCartByUserId); // Get all cart items
router.post("/cart", cartController.addToCart); // Add to cart
router.put("/cart/:id", cartController.updateCartItem); // Update
router.delete("/cart/:id", cartController.deleteCartItem); // Delete cart
router.delete("/cart/user/:user_id", cartController.clearCart); // Clear all cart items

module.exports = router;
