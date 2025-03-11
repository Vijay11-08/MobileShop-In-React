import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Mobile Store</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/products" className="hover:underline">Shop</Link></li>
          <li><Link to="/search" className="hover:underline">Search</Link></li>
          <li><Link to="/cart" className="hover:underline">Cart</Link></li>
          <li><Link to="/checkout" className="hover:underline">Checkout</Link></li>
          <li><Link to="/orders" className="hover:underline">Orders</Link></li>
          <li><Link to="/wishlist" className="hover:underline">Wishlist</Link></li>
          <li><Link to="/reviews" className="hover:underline">Reviews</Link></li>
          <li><Link to="/profile" className="hover:underline">Profile</Link></li>
          <li><Link to="/support" className="hover:underline">Support</Link></li>
          <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
          <li><Link to="/register" className="hover:underline">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
