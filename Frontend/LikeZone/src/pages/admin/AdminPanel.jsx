import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="mb-4">Admin Panel - Product Management</h2>
        <nav className="mb-3">
          <Link to="/" className="btn btn-primary me-2">View Products</Link>
          <Link to="/add" className="btn btn-success">Add Product</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<ProductForm />} />
          <Route path="/edit/:id" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AdminPanel;
