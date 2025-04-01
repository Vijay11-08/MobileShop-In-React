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
// Import Routes
const registerRoutes = require("./src/routes/registerRoutes");


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
app.use("/api", registerRoutes); // for register Routes

const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));


// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));

