import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SellSurface = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const surfaceModels = [
    "Microsoft Surface / Surface Pro",
    "Microsoft Surface",
    "Microsoft Surface Go",
    "Microsoft Surface Laptop",
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center">Sell My Microsoft Surface</h2>
      <p className="text-center">
        Select your Microsoft Surface model to sell and get the highest cash
        offer.
      </p>

      {/* Search Bar */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search your Microsoft Surface model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </div>

      <div className="text-center mb-3">
        <p>
          Can’t find your device? <a href="#">Click here</a>
        </p>
      </div>

      {/* Surface Models */}
      <div className="row">
        {surfaceModels
          .filter((model) =>
            model.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((surface, index) => (
            <div className="col-md-3" key={index}>
              <div className="surface-card p-3 text-center border rounded shadow-sm mb-3">
                <img src="surface_logo.png" alt={surface} className="mb-2" style={{ maxWidth: "100px" }} />
                <h5>{surface}</h5>
                <a href="#" className="btn btn-primary btn-sm">
                  Start Selling
                </a>
              </div>
            </div>
          ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-5">
        <h3>FAQs & Tips When Selling Your Microsoft Surface Online</h3>
        <div className="accordion" id="faqAccordion">
          {[  
            { title: "How can I sell Microsoft Surfaces online?", content: "Selling your Microsoft Surface online is simple! Select your model, get an instant quote, package it securely, and ship it for free. Your payment will be processed quickly." },
            { title: "How fast do I get paid for my Microsoft Surface?", content: "Payments are processed within 24-48 hours after receiving and inspecting your device." },
            { title: "How do I prepare my Microsoft Surface for sale?", content: "Make sure to back up your data, sign out of your Microsoft account, and perform a factory reset before selling your device." },
            { title: "Can I sell Microsoft Surfaces in bulk?", content: "Yes! We accept bulk sales of Microsoft Surfaces. Contact us for special pricing and processing." }
          ].map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                >
                  {faq.title}
                </button>
              </h2>
              <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="text-center mt-4">
        <p>
          Still have questions? <a href="#">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default SellSurface;