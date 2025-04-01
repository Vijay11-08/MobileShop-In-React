const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const pool = require("../DbConnections/postgresdb");
const nodemailer = require("nodemailer");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'vijayotaradi118@gmail.com', // Your Gmail ID
    pass:'cyuu cdsj samu kapb', // App Password
  },
});

// $mail->Username = 'vijayotaradi118@gmail.com'; // Your Gmail username
// $mail->Password = 'cyuu cdsj samu kapb'; 
// Register a New User
exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, password, gender, mobile } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePic = req.file ? `/uploads/${req.file.filename}` : null;
    const token = Date.now().toString(36) + Math.random().toString(36).substr(2); // Generate token

    // Insert into database
    const result = await pool.query(
      "INSERT INTO users (fullname, email, password, gender, mobile, profile_pic, token, verified) VALUES ($1, $2, $3, $4, $5, $6, $7, false) RETURNING *",
      [fullname, email, hashedPassword, gender, mobile, profilePic, token]
    );

    // Send Verification Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Account Registration Confirmation",
      html: `<h3>Hello ${fullname},</h3>
             <p>Thank you for registering! Please verify your account by clicking the link below:</p>
             <a href="http://localhost:5000/verify?token=${token}">Verify Your Account</a>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: "Registration successful! Check your email for verification." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Email Verification Route
exports.verifyUser = async (req, res) => {
  try {
    const { token } = req.query;
    const result = await pool.query("SELECT * FROM users WHERE token = $1", [token]);

    if (result.rows.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid token!" });
    }

    await pool.query("UPDATE users SET verified = true, token = NULL WHERE token = $1", [token]);

    res.send("Account verified! You can now log in.");
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Export Multer upload middleware
exports.upload = upload;


// router.get("/verify", async (req, res) => {
//     try {
//         const { token } = req.query;

//         // Verify JWT token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         // Update user status in the database
//         await pool.query("UPDATE users SET is_verified = $1 WHERE email = $2", [true, decoded.email]);

//         res.send("<h2>Email Verified Successfully! You can now log in.</h2>");

//     } catch (error) {
//         res.status(400).send("<h2>Invalid or expired token!</h2>");
//     }
// });

// module.exports = router;