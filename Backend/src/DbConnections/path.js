// backend/
// │── node_modules/
// │── src/
// │   ├── models/          # Database models (Product, User, etc.)
// │   ├── routes/          # API routes (productRoutes.js, userRoutes.js, etc.)
// │   ├── controllers/     # Business logic for routes
// │   ├── middleware/      # Authentication & other middleware
// │   ├── config/          # DB connection & other configurations
// │   ├── app.js           # Express server entry point
// │── .env                 # Environment variables
// │── package.json         # Dependencies
// │── README.md            # Documentation



// 4. Backend Development Steps

// Step 1: Setup Node.js & Express
// mkdir backend && cd backend
// npm init -y
// npm install express pg sequelize dotenv jsonwebtoken bcryptjs cors body-parser
// npm install --save-dev nodemon


// Step 2: Connect PostgreSQL
// Create .env file:

// ini
// Copy
// Edit
// DB_HOST=localhost
// DB_USER=your_username
// DB_PASSWORD=your_password
// DB_NAME=mobile_shop
// DB_PORT=5432
// JWT_SECRET=your_secret_key



// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100),
//     email VARCHAR(100) UNIQUE NOT NULL,
//     password TEXT NOT NULL,
//     role VARCHAR(50) DEFAULT 'customer',
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE categories (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) UNIQUE NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE products (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     description TEXT,
//     price DECIMAL(10,2) NOT NULL,
//     stock INT DEFAULT 0,
//     category_id INT REFERENCES categories(id) ON DELETE SET NULL,
//     image_url TEXT, -- Image URL for storing product images
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE cart (
//     id SERIAL PRIMARY KEY,
//     user_id INT REFERENCES users(id) ON DELETE CASCADE,
//     product_id INT REFERENCES products(id) ON DELETE CASCADE,
//     quantity INT DEFAULT 1 CHECK (quantity > 0),
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE orders (
//     id SERIAL PRIMARY KEY,
//     user_id INT REFERENCES users(id) ON DELETE CASCADE,
//     total_price DECIMAL(10,2) NOT NULL,
//     status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- New table to track products in each order
// CREATE TABLE order_items (
//     id SERIAL PRIMARY KEY,
//     order_id INT REFERENCES orders(id) ON DELETE CASCADE,
//     product_id INT REFERENCES products(id) ON DELETE CASCADE,
//     quantity INT NOT NULL CHECK (quantity > 0),
//     price DECIMAL(10,2) NOT NULL, -- Stores the price at the time of purchase
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE payments (
//     id SERIAL PRIMARY KEY,
//     user_id INT REFERENCES users(id) ON DELETE CASCADE,
//     order_id INT REFERENCES orders(id) ON DELETE CASCADE,
//     amount DECIMAL(10,2) NOT NULL,
//     payment_method VARCHAR(50) CHECK (payment_method IN ('credit_card', 'debit_card', 'paypal', 'upi', 'cod')),
//     payment_status VARCHAR(50) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
