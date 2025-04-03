import React from "react";
import "../assets/Footer.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: likezonemobileshop@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> Phone: +91 99046 40764</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Like Zone Mobile Shop, Tramba, Rajkot, Gujarat, India</p>
          </div>

          <div className="social-icons">
            <h4>Follow Us</h4>
            <ul className="social-icons-container">
              <li><a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://www.linkedin.com/in/vijay-otaradi-678427266/" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://www.instagram.com/like_zone_mobile_shop/" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
