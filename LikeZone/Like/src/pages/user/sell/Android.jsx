import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const androidBrands = [
  "Google Pixel", "Motorola", "OnePlus", "LG", "Microsoft", "Sony", "Essential", "CAT",
  "Blackberry", "HTC", "Nothing Phone", "Nokia", "Huawei", "Xiaomi", "ZTE", "Revvl", "BLU",
  "TCL", "Kyocera", "Oppo", "Razer", "Asus", "Sonim", "vivo", "Alcatel", "Samsung"
];

const BrandCard = ({ brand }) => (
  <div className="col-md-3">
    <div className="brand-card p-3 text-center shadow-sm rounded">
      <img src="/images/android_logo.png" alt={brand} className="img-fluid" style={{ maxWidth: "100px" }} />
      <h5 className="mt-3">{brand}</h5>
      <button className="btn btn-primary btn-sm">Sell Now</button>
    </div>
  </div>
);

const FAQ = () => (
  <div className="mt-5">
    <h3>FAQs & Tips When Selling Your Android Phone Online</h3>
    <div className="accordion" id="faqAccordion">
      {[ 
        { q: "How do I sell my Android phone online?", a: "Selling your Android phone online is easy! Select your brand and model, get an instant quote, package it securely, and ship it for free. You'll receive your payout via your selected payment method." },
        { q: "What model of Android phone do I have?", a: "You can check your Android model in Settings > About Phone or by looking at the label on the box or inside the SIM tray." },
        { q: "Can I sell Android phones in bulk?", a: "Yes! We accept bulk sales for Android devices. Contact us for special pricing on bulk orders." }
      ].map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`}>
              {faq.q}
            </button>
          </h2>
          <div id={`faq${index}`} className="accordion-collapse collapse">
            <div className="accordion-body">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SellAndroid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBrands = androidBrands.filter(brand => 
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="container my-5">
        <h2 className="text-center">Sell My Android Phone</h2>
        <p className="text-center">Select your Android smartphone to sell and get instant cash offers.</p>

        <div className="input-group mb-4 mx-auto" style={{ maxWidth: "500px" }}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search your Android device..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </div>

        <div className="row justify-content-center">
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand, index) => (
              <BrandCard key={index} brand={brand} />
            ))
          ) : (
            <p className="text-center">No results found</p>
          )}
        </div>

        <div className="text-center mt-4">
          <p>Can’t find your device? <Link to="/contact" className="text-primary fw-bold">Click here</Link></p>
        </div>

        <FAQ />

        <div className="text-center mt-4">
          <p>Still have questions? <Link to="/support" className="text-primary fw-bold">Contact Support</Link></p>
        </div>
      </div>

      <Routes>
        <Route path="/sell" element={<h2 className="text-center">Sell Your Android Phone Here</h2>} />
        <Route path="/contact" element={<h2 className="text-center">Contact Us</h2>} />
        <Route path="/support" element={<h2 className="text-center">Support Page</h2>} />
      </Routes>
    </Router>
  );
};

export default SellAndroid;
