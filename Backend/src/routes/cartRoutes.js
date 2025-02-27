const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/cart", cartController.getAllCartItems);
router.get("/cart/:user_id", cartController.getCartByUserId);
router.post("/cart", cartController.addToCart);
router.put("/cart/:id", cartController.updateCartItem);
router.delete("/cart/:id", cartController.deleteCartItem);
router.delete("/cart/user/:user_id", cartController.clearCart);

module.exports = router;
