import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const smartwatchModels = [
  "Apple Watch", "Samsung Galaxy Watch", "Google Pixel Watch"
];

const SmartwatchCard = ({ model }) => (
  <div className="col-md-4">
    <div className="smartwatch-card p-3 text-center shadow-sm rounded">
      <img src="/images/smartwatch_logo.png" alt={model} className="img-fluid" style={{ maxWidth: "100px" }} />
      <h5 className="mt-3">{model}</h5>
      <button className="btn btn-primary btn-sm">Start Selling</button>
    </div>
  </div>
);

const FAQ = () => (
  <div className="mt-5">
    <h3>FAQs & Tips When Selling Your Smartwatch Online</h3>
    <div className="accordion" id="faqAccordion">
      {[ 
        { q: "How do I sell my smartwatch online?", a: "Selling your smartwatch online is simple! Select your model, get an instant quote, package it securely, and ship it for free. Your payment will be processed quickly." },
        { q: "What smartwatch do I have?", a: "You can check your smartwatch model in the device settings or on the back of the watch." },
        { q: "Can I send a device to recycle?", a: "Yes! We offer a recycling option for smartwatches that are no longer functional." },
        { q: "Can I get a higher offer if I include accessories?", a: "Including accessories like original chargers and bands may increase the value of your smartwatch." },
        { q: "Can I sell smartwatches in bulk?", a: "Yes! We accept bulk sales of smartwatches. Contact us for special pricing and processing." }
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

const SellSmartwatch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredModels = smartwatchModels.filter(model => 
    model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="container my-5">
        <h2 className="text-center">Sell My Smartwatch</h2>
        <p className="text-center">Select your smartwatch model to sell and get the highest cash offer.</p>

        <div className="input-group mb-4 mx-auto" style={{ maxWidth: "500px" }}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search your smartwatch model..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </div>

        <div className="row justify-content-center">
          {filteredModels.length > 0 ? (
            filteredModels.map((model, index) => (
              <SmartwatchCard key={index} model={model} />
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
        <Route path="/sell" element={<h2 className="text-center">Sell Your Smartwatch Here</h2>} />
        <Route path="/contact" element={<h2 className="text-center">Contact Us</h2>} />
        <Route path="/support" element={<h2 className="text-center">Support Page</h2>} />
      </Routes>
    </Router>
  );
};

export default SellSmartwatch;