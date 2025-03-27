const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// 🔹 CREATE: Register a new user
router.post("/register", userController.registerUser);

// 🔹 READ: Get all users
router.get("/users", userController.getAllUsers);

// 🔹 READ: Get a single user by ID
router.get("/users/:id", userController.getUserById);

// 🔹 UPDATE: Update user details
router.put("/users/:id", userController.updateUser);

// 🔹 DELETE: Delete a user
router.delete("/users/:id", userController.deleteUser);

module.exports = router;

