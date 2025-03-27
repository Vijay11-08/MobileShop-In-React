import React from "react";
import { Link, useNavigate } from "react-router-dom";


function UserHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="header">
      <h1>📱 Mobile Shop</h1>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/user">Dashboard</Link> |
        <Link to="/checkout">Checkout</Link> |
        <Link to="/products">Products</Link> | {/* New Route for Products List */}
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default UserHeader;
