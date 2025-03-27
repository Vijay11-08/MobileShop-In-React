import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserHeader() {
  const navigate = useNavigate();
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>📱 Mobile Shop</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/user">Dashboard</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/products">Products</Link>

        {/* Buy Dropdown */}
        <div 
          className="dropdown"
          onMouseEnter={() => setIsBuyOpen(true)}
          onMouseLeave={() => setIsBuyOpen(false)}
        >
          <button className="dropbtn">Buy ▼</button>
          {isBuyOpen && (
            <div className="dropdown-content">
              <Link to="/buy/iphone">Buy iPhone</Link>
              <Link to="/buy/samsung">Buy Samsung</Link>
              <Link to="/buy/android">Buy Android</Link>
              <Link to="/buy/ipad">Buy iPad</Link>
              <Link to="/buy/smartwatch">Buy Smartwatch</Link>
              <Link to="/buy/macbook">Buy MacBook</Link>
              <Link to="/buy/accessories">Buy Accessories</Link>
            </div>
          )}
        </div>

        {/* Sell Dropdown */}
        <div 
          className="dropdown"
          onMouseEnter={() => setIsSellOpen(true)}
          onMouseLeave={() => setIsSellOpen(false)}
        >
          <button className="dropbtn">Sell ▼</button>
          {isSellOpen && (
            <div className="dropdown-content">
              <Link to="/sell/iphone">Sell iPhone</Link>
              <Link to="/sell/samsung">Sell Samsung</Link>
              <Link to="/sell/android">Sell Android</Link>
              <Link to="/sell/ipad">Sell iPad</Link>
              <Link to="/sell/smartwatch">Sell Smartwatch</Link>
             
              <Link to="/sell/accessories">Sell Accessories</Link>
            </div>
          )}
        </div>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </nav>

      {/* Styles */}
      <style>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background: #333;
          color: white;
          border-bottom: 3px solid #ff6600;
        }
        
        .logo h1 {
          margin: 0;
          font-size: 24px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-links a, .dropbtn {
          text-decoration: none;
          color: white;
          font-size: 16px;
          padding: 10px 15px;
          transition: 0.3s;
          cursor: pointer;
        }

        .nav-links a:hover, .dropbtn:hover {
          background: #ff6600;
          border-radius: 5px;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-content {
          position: absolute;
          top: 40px;
          left: 0;
          background: white;
          border: 1px solid #ccc;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          min-width: 160px;
          border-radius: 5px;
        }

        .dropdown-content a {
          color: black;
          padding: 10px;
          text-decoration: none;
          display: block;
          transition: 0.3s;
        }

        .dropdown-content a:hover {
          background: #ff6600;
          color: white;
        }

        .logout-btn {
          background: red;
          color: white;
          padding: 8px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .logout-btn:hover {
          background: darkred;
        }
      `}</style>
    </header>
  );
}

export default UserHeader;
