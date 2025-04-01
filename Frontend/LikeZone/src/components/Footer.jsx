import React from 'react';

function Footer() {
  return (<>
    <footer>
       <div class="footer-container">
     <div class="newsletter">
         <h3>Enter Email For Deals!</h3>
         <p>Get offers and updates right from your inbox</p>
         <input type="email" class="newsletter-input" placeholder="Enter your email"/>
     </div>
     <div class="footer-links">
         <div class="column">
             <h4>SERVICES</h4>
             <ul>
                 <li><a href="#">In-Store</a></li>
                 <li><a href="#">Gift Cards</a></li>
                 <li><a href="#">Repair & Tech</a></li>
                 <li><a href="#">Trade-In</a></li>
                 <li><a href="#">All Access</a></li>
                 <li><a href="#">FAQ</a></li>
             </ul>
         </div>
         <div class="column">
             <h4>COMPANY</h4>
             <ul>
                 <li><a href="#">About Us</a></li>
                 <li><a href="#">Careers</a></li>
                 <li><a href="#">Contact Us</a></li>
                 <li><a href="#">Store Locations</a></li>
             </ul>
         </div>
         <div class="column">
             <h4>INFORMATION</h4>
             <ul>
                 <li><a href="#">Blog</a></li>
                 <li><a href="#">FAQs</a></li>
                 <li><a href="#">Privacy Policy</a></li>
                 <li><a href="#">Terms & Conditions</a></li>
             </ul>
         </div>
         <div class="social-icons">
             <h4>Follow Us</h4>
             <div class="icons">
                 <ul class="social-icons-container">
                     <li><a href="#" class="fa fa-facebook social-icons"></a></li>
                     <li><a href="#" class="fa fa-twitter social-icons"></a></li>
                     <li><a href="https://www.linkedin.com/in/vijay-otaradi-678427266/" class="fa fa-linkedin social-icons"></a></li>
                     <li><a href="https://www.instagram.com/like_zone_mobile_shop/" class="fa fa-instagram social-icons"></a></li>
                 </ul>
             </div>
         </div>
     </div>
 </div>
    </footer>
    </>
  );
}
export default Footer;