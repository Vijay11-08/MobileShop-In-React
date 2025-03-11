import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Mobile Store</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/products" className="nav-link">Shop</Link></li>
                    <li className="nav-item"><Link to="/search" className="nav-link">Search</Link></li>
                    <li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>
                    <li className="nav-item"><Link to="/checkout" className="nav-link">Checkout</Link></li>
                    <li className="nav-item"><Link to="/orders" className="nav-link">Orders</Link></li>
                    <li className="nav-item"><Link to="/wishlist" className="nav-link">Wishlist</Link></li>
                    <li className="nav-item"><Link to="/reviews" className="nav-link">Reviews</Link></li>
                    <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                    <li className="nav-item"><Link to="/support" className="nav-link">Support</Link></li>
                    <li className="nav-item"><Link to="/faq" className="nav-link">FAQs</Link></li>
                    <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                    <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                </ul>
            </div>
        </div>
    </nav>
);
};

export default Navbar;
