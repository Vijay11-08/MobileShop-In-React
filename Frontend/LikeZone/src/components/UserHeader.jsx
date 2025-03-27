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
        <Link to="/products">Products</Link> |

        {/* Buy Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Buy ▼</button>
          <div className="dropdown-content">
            <Link to="/buy/iphone">Buy iPhone</Link>
            <Link to="/buy/samsung">Buy Samsung</Link>
            <Link to="/buy/android">Buy Android</Link>
            <Link to="/buy/ipad">Buy iPad</Link>
            <Link to="/buy/smartwatch">Buy Smartwatch</Link>
            <Link to="/buy/macbook">Buy MacBook</Link>
            <Link to="/buy/accessories">Buy Accessories</Link>
          </div>
        </div> |

        {/* Sell Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Sell ▼</button>
          <div className="dropdown-content">
            <Link to="/sell/iphone">Sell iPhone</Link>
            <Link to="/sell/samsung">Sell Samsung</Link>
            <Link to="/sell/android">Sell Android</Link>
            <Link to="/sell/ipad">Sell iPad</Link>
            <Link to="/sell/smartwatch">Sell Smartwatch</Link>
            <Link to="/sell/macbook">Sell MacBook</Link>
            <Link to="/sell/accessories">Sell Accessories</Link>
          </div>
        </div> |

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default UserHeader;
