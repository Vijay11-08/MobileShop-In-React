import React from "react";
import { Link } from "react-router-dom";
const AdminSidebar = () => (
  <nav className="admin-sidebar">
    <Link to="/admin/dashboard">Dashboard</Link>
    <Link to="/admin/products">Products</Link>
    <Link to="/admin/users">Users</Link>
    <Link to="/admin/orders">Orders</Link>
  </nav>
);
export default AdminSidebar;
