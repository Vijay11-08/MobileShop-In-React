import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Email Subscription */}
          <div className="col-md-4">
            <h5>Enter Email For Deals!</h5>
            <p>Get offers and updates right from your inbox</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn btn-warning">Subscribe</button>
            </div>
          </div>

          {/* Services */}
          <div className="col-md-2">
            <h6>Services</h6>
            <ul className="list-unstyled">
              <li><a href="/buy-device" className="text-light">Buy A Device</a></li>
              <li><a href="/sell-device" className="text-light">Sell A Device</a></li>
              <li><a href="/repair-device" className="text-light">Repair A Device</a></li>
              <li><a href="/sell-in-bulk" className="text-light">Sell In Bulk</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="col-md-2">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li><a href="/about-us" className="text-light">About Us</a></li>
              <li><a href="/careers" className="text-light">Careers</a></li>
              <li><a href="/contact-us" className="text-light">Contact Us</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-2">
            <h6>Information</h6>
            <ul className="list-unstyled">
              <li><a href="/blog" className="text-light">Blog</a></li>
              <li><a href="/faqs" className="text-light">FAQs</a></li>
              <li><a href="/privacy-policy" className="text-light">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-2">
            <h6>Follow Us</h6>
            <a href="#" className="text-light">Social Media Icons</a>
          </div>
        </div>

        <hr />
        <p className="text-center">©2025 Like Zone Mobile</p>
      </div>
    </footer>
  );
};

export default Footer;
