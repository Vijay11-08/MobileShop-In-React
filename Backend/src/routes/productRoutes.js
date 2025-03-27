const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Product Routes
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.upload.single("image"), productController.createProduct);
router.put("/:id", productController.upload.single("image"), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
