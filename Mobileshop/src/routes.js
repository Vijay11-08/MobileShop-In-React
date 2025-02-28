import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import Products from './pages/user/Products';
import ProductDetails from './pages/user/ProductDetails';
import Cart from './pages/user/Cart';
import Checkout from './pages/user/Checkout';
import Orders from './pages/user/Orders';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Profile from './pages/user/Profile';

import Dashboard from './pages/admin/Dashboard';
import ManageProducts from './pages/admin/ManageProducts';
import ManageOrders from './pages/admin/ManageOrders';
import ManageUsers from './pages/admin/ManageUsers';
import ManageCategories from './pages/admin/ManageCategories';
import Reports from './pages/admin/Reports';
import AdminLogin from './pages/admin/AdminLogin';

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* User Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/products" element={<ManageProducts />} />
      <Route path="/admin/orders" element={<ManageOrders />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/categories" element={<ManageCategories />} />
      <Route path="/admin/reports" element={<Reports />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  </Router>
);

export default AppRoutes;
