const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

// Registration Route with Image Upload
router.post("/register", registerController.upload.single("profilePic"), registerController.registerUser);

// Email Verification Route
router.get("/verify", registerController.verifyUser);

module.exports = router;
