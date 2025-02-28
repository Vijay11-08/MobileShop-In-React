# 📱 Mobile Shop Management System 🚀

## 📌 Overview
The **Mobile Shop Management System** is a powerful web application designed to streamline the management of mobile products, categories, orders, payments, and user authentication. It offers separate panels for **Admin** and **User**, ensuring role-based access to features.

---

## 🏗️ Tech Stack 🛠️
### 🎨 Frontend:
- ⚛️ **React.js**
- 🎨 **Tailwind CSS**
- 🗂️ **Redux (State Management)**
- 🔄 **React Router (Navigation)**

### 🖥️ Backend:
- 🌐 **Node.js with Express.js**
- 🗄️ **PostgreSQL (Database)**
- 🔗 **Sequelize ORM**
- 🔐 **JWT Authentication**

---

## ✨ Features ✨
### 🛠️ Admin Panel
- 📊 **Dashboard with sales analytics**
- 📦 **Manage products (CRUD operations)**
- 🏷️ **Manage categories (CRUD operations)**
- 📜 **View and update order statuses**
- 👤 **Manage user roles and permissions**
- 💳 **Payment tracking**

### 👤 User Panel
- 🔐 **User registration & login**
- 🔎 **Browse and search products**
- 🛒 **Add products to the cart**
- 📦 **Place orders & track order status**
- 🔒 **Secure payment processing**

---

## 📂 Folder Structure 📁
```
mobile-shop/
│-- frontend/ (React.js)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│   ├── package.json
│   ├── tailwind.config.js
│
│-- backend/ (Node.js + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── package.json
│
│-- README.md
```

---

## 🚀 Installation & Setup 🛠️
### 🔹 1️⃣ Backend Setup
```sh
cd backend
npm install
npm start
```
- 🛠️ Configure `.env` for database credentials
- 🔄 Run database migrations using Sequelize

### 🔹 2️⃣ Frontend Setup
```sh
cd frontend
npm install
npm start
```

---

## 📌 API Endpoints 🌐
### 🔑 Authentication Routes
- 🔹 `POST /api/register` - Register a new user
- 🔹 `POST /api/login` - Login user
- 🔹 `GET /api/profile` - Fetch user profile

### 📦 Product Routes
- 📌 `GET /api/products` - Get all products
- 📌 `POST /api/products` - Add a new product
- 📌 `PUT /api/products/:id` - Update product
- 📌 `DELETE /api/products/:id` - Delete product

### 🏷️ Category Routes
- 🏷️ `GET /api/categories` - Get all categories
- 🏷️ `POST /api/categories` - Add a new category
- 🏷️ `PUT /api/categories/:id` - Update category
- 🏷️ `DELETE /api/categories/:id` - Delete category

### 🛒 Cart Routes
- 🛍️ `GET /api/cart` - Get user cart
- 🛍️ `POST /api/cart` - Add product to cart
- 🛍️ `DELETE /api/cart/:id` - Remove item from cart

### 📦 Order Routes
- 📜 `GET /api/orders` - Get user orders
- 📜 `POST /api/orders` - Place a new order
- 📜 `PUT /api/orders/:id` - Update order status

### 💳 Payment Routes
- 💰 `POST /api/payments` - Process payment

---

## 🎨 UI Preview 🌟
🚀 [Demo Link](#) *(To be updated soon!)*

---

## 🤝 Contribution 🤝
We ❤️ contributions! Want to contribute?
1. **Fork** this repository
2. **Create a new branch** (`feature-branch`)
3. **Make changes & commit**
4. **Submit a Pull Request (PR)**



✨ Developed with ❤️ by
**Vijay Otaradi**,
**Maharshi Nimbark** & 
**Jay Sankhaliya**🚀

