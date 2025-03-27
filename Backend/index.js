const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// User Routes
const userRoutes = require("./src/routes/userRoutes");

// Product Routes
const productRoutes = require("./src/routes/productRoutes");

// Cart Routes
const cartRoutes = require("./src/routes/cartRoutes");

// Category Routes
const categoryRoutes = require("./src/routes/categoryRoutes");

// Order Routes & Order Item Routes
const orderRoutes = require("./src/routes/orderRoutes");

// Order Item Routes (for one-to-many relationship)
const orderItemRoutes = require("./src/routes/orderItemRoutes");

// Payment Routes
const paymentRoutes = require("./src/routes/paymentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", userRoutes); // For User Routes
app.use("/api", productRoutes); // For Product Routes
app.use("/api", cartRoutes); // For Cart Routes
app.use("/api", categoryRoutes);  // For Category Routes
app.use("/api", orderRoutes); //  For Order Routes
app.use("/api", orderItemRoutes); //  For OrderItems Routes
app.use("/api", paymentRoutes);  // For Payments Routes

const PORT = process.env.PORT || 5000;


const nodemailer = require("nodemailer");

app.post("/api/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  // Simulate saving user (You can replace this with a database call)
  console.log(`User Registered: Name=${name}, Email=${email}, Role=${role}`);

  // Nodemailer Transporter Setup (Use your SMTP service)
  let transporter = nodemailer.createTransport({
    service: "gmail", // Or use "smtp.mailtrap.io" for testing
    auth: {
      user: "vijayotaradi118@gmail.com",
      pass: "cyuu cdsj samu kapb",
    },
  });

  // Email Options
  let mailOptions = {
    from: '"Your Website" <vijayotaradi118@gmail.com>',
    to: email,
    subject: "Registration Successful",
    text: `Hello ${name},\n\nThank you for registering as a ${role}.\n\nBest Regards,\nYour Website Team`,
  };

  // Send Email
  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Registration successful! Check your email for confirmation." });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email." });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
