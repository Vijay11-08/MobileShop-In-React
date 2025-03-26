import { Link } from "react-router-dom";

const UserHeader = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">for_new_website</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="buyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Buy
                </a>
                <ul className="dropdown-menu" aria-labelledby="buyDropdown">
                  <li><Link className="dropdown-item" to="/buy/iphone">Buy iPhone</Link></li>
                  <li><Link className="dropdown-item" to="/buy/samsung">Buy Samsung</Link></li>
                  <li><Link className="dropdown-item" to="/buy/android">Buy Android</Link></li>
                  <li><Link className="dropdown-item" to="/buy/ipad">Buy iPad/Tablet</Link></li>
                  <li><Link className="dropdown-item" to="/buy/smartwatch">Buy Smartwatch</Link></li>
                  <li><Link className="dropdown-item" to="/buy/macbook">Buy MacBook</Link></li>
                  <li><Link className="dropdown-item" to="/buy/accessories">Buy Accessories</Link></li>
                  <li><Link className="dropdown-item" to="/buy/clearance">Clearance</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="sellDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sell
                </a>
                <ul className="dropdown-menu" aria-labelledby="sellDropdown">
                  <li><Link className="dropdown-item" to="/sell/iphone">Sell My iPhone</Link></li>
                  <li><Link className="dropdown-item" to="/sell/samsung">Sell My Samsung</Link></li>
                  <li><Link className="dropdown-item" to="/sell/android">Sell My Android</Link></li>
                  <li><Link className="dropdown-item" to="/sell/smartwatch">Sell My Smartwatch</Link></li>
                  <li><Link className="dropdown-item" to="/sell/ipad">Sell My iPad/Tablet</Link></li>
                  <li><Link className="dropdown-item" to="/sell/macbook">Sell My MacBook</Link></li>
                  <li><Link className="dropdown-item" to="/sell/macdesktop">Sell My Mac Desktop</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/sell">Sell Page</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/sell-in-bulk">Sell in Bulk</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="moreDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="moreDropdown">
                  <li><Link className="dropdown-item" to="/how-it-works">How It Works</Link></li>
                  <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                  <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
                  <li><Link className="dropdown-item" to="/faqs">FAQs</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default UserHeader;
