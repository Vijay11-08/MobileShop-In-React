const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Define routes for Category CRUD operations
router.get("/categories", categoryController.getAllCategories); // get all categories
router.get("/categories/:id", categoryController.getCategoryById); // get category
router.post("/categories", categoryController.addCategory); // add category
router.put("/categories/:id", categoryController.updateCategory); // update category
router.delete("/categories/:id", categoryController.deleteCategory); // delete category

module.exports = router;
