import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SellTablet = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const tabletModels = [
    "Apple iPad",
    "Samsung Tablet",
    "Google Tablet",
    "OnePlus Pad"
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center">Sell iPads & Tablets for Cash Online</h2>
      <p className="text-center">
        Select your iPad or Tablet to sell and get the highest cash offer.
      </p>

      {/* Search Bar */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search your iPad or Tablet model..."
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

      {/* Tablet Models */}
      <div className="row">
        {tabletModels
          .filter((model) =>
            model.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((tablet, index) => (
            <div className="col-md-3" key={index}>
              <div className="tablet-card p-3 text-center border rounded shadow-sm mb-3">
                <img src="tablet_logo.png" alt={tablet} className="mb-2" style={{ maxWidth: "100px" }} />
                <h5>{tablet}</h5>
                <a href="#" className="btn btn-primary btn-sm">
                  Start Selling
                </a>
              </div>
            </div>
          ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-5">
        <h3>FAQs & Tips When Selling Your iPad or Tablet Online</h3>
        <div className="accordion" id="faqAccordion">
          {[  
            { title: "How do I sell my iPad or Tablet online?", content: "Selling your iPad or tablet online is simple! Select your model, get an instant quote, package it securely, and ship it for free. Your payment will be processed quickly." },
            { title: "What iPad / Tablet model do I have?", content: "You can check your iPad or tablet model under **Settings > About** or by checking the back of the device." },
            { title: "When should I sell my iPad / Tablet?", content: "It's best to sell your iPad or tablet **before a new model launches** to get the highest value." },
            { title: "Can I sell iPads and tablets in bulk?", content: "Yes! We accept bulk sales of iPads and tablets. Contact us for special pricing and processing." }
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

export default SellTablet;