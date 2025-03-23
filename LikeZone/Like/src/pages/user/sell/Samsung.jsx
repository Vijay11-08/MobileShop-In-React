import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const samsungModels = [
  "Samsung Galaxy S21 5G", "Samsung Galaxy Note 20 5G", "Samsung Galaxy Z Fold 2 5G",
  "Samsung Galaxy A51", "Samsung Galaxy XCover"
];

const SamsungCard = ({ model }) => (
  <div className="col-md-3">
    <div className="samsung-card p-3 text-center shadow-sm rounded">
      <img src="/images/samsung_logo.png" alt={model} className="img-fluid" style={{ maxWidth: "100px" }} />
      <h5 className="mt-3">{model}</h5>
      <button className="btn btn-primary btn-sm">Start Selling</button>
    </div>
  </div>
);

const FAQ = () => (
  <div className="mt-5">
    <h3>FAQs & Tips When Selling Your Samsung Galaxy Online</h3>
    <div className="accordion" id="faqAccordion">
      {[
        { q: "How do I sell my Samsung Galaxy phone online?", a: "Selling your Samsung Galaxy online is easy! Select your model, get an instant quote, package it securely, and ship it for free. Your payment will be processed quickly." },
        { q: "What model of Samsung Galaxy do I have?", a: "You can check your Samsung model under Settings > About phone." },
        { q: "How fast do I get paid for my Samsung Galaxy phone?", a: "Payments are processed within 24-48 hours after receiving and inspecting your Samsung Galaxy." },
        { q: "When should I sell my Samsung Galaxy phone?", a: "It's best to sell your Samsung Galaxy before a new model launches to get the highest value." },
        { q: "Can I sell Samsung Galaxy phones in bulk?", a: "Yes! We accept bulk sales of Samsung Galaxy devices. Contact us for special pricing and processing." }
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

const SellSamsung = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredModels = samsungModels.filter(model => 
    model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="container my-5">
        <h2 className="text-center">Sell My Samsung Galaxy</h2>
        <p className="text-center">Select your Samsung Galaxy model to sell and get the highest cash offer.</p>

        <div className="input-group mb-4 mx-auto" style={{ maxWidth: "500px" }}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search your Samsung model..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </div>

        <div className="row justify-content-center">
          {filteredModels.length > 0 ? (
            filteredModels.map((model, index) => (
              <SamsungCard key={index} model={model} />
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
        <Route path="/sell" element={<h2 className="text-center">Sell Your Samsung Here</h2>} />
        <Route path="/contact" element={<h2 className="text-center">Contact Us</h2>} />
        <Route path="/support" element={<h2 className="text-center">Support Page</h2>} />
      </Routes>
    </Router>
  );
};

export default SellSamsung;