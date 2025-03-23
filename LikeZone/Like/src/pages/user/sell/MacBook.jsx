import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const macbooks = ["MacBook Pro", "MacBook Air", "MacBook"];
const faqs = [
  {
    question: "How can I sell MacBooks online?",
    answer:
      "Selling or trading in MacBooks online with SmartphonesPLUS is easy and takes just a few minutes. Simply select your MacBook’s model and get an instant quote. Then, package your device and ship it to us for free. We’ll send your payout to your selected payment method.",
  },
  {
    question: "What MacBook model do I have?",
    answer: "You can check your MacBook model by clicking **Apple menu > About This Mac**.",
  },
  {
    question: "How fast do I get paid for my MacBook?",
    answer: "Payments are processed within **24-48 hours** after receiving and inspecting your MacBook.",
  },
  {
    question: "When should I sell my MacBook?",
    answer: "It's best to sell your MacBook **before a new model launches** to get the highest value.",
  },
  {
    question: "Why should I trust SmartphonesPLUS when selling my MacBook?",
    answer:
      "SmartphonesPLUS offers competitive pricing, free shipping, and fast payments to ensure a smooth selling experience.",
  },
  {
    question: "Do I need to include the charger when selling my MacBook?",
    answer: "No, you are not required to include the charger, but doing so may increase the offer amount.",
  },
  {
    question: "How do I prepare my MacBook for sale?",
    answer:
      "Backup your data, sign out of iCloud, and reset your MacBook to factory settings before selling it.",
  },
  {
    question: "Can I sell MacBooks in bulk?",
    answer: "Yes! We accept bulk sales of MacBooks. Contact us for special pricing and processing.",
  },
];

const SellMacBook = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Sell My MacBook</h2>
      <p className="text-center">Select your MacBook to sell and get the highest cash offer.</p>

      <div className="text-center mb-3">
        <p>Can’t find your device? <a href="#">Click here</a></p>
      </div>

      {/* MacBook Models */}
      <div className="row">
        {macbooks.map((macbook, index) => (
          <div className="col-md-4" key={index}>
            <div className="macbook-card border rounded p-3 text-center shadow-sm mb-3">
              <img src="macbook_logo.png" alt={macbook} style={{ maxWidth: "100px", marginBottom: "10px" }} />
              <h5>Sell {macbook}</h5>
              <a href="#" className="btn btn-primary btn-sm">Start Selling</a>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-5">
        <h3>FAQs & Tips When Selling Your MacBook Online</h3>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div id={`faq${index}`} className="accordion-collapse collapse">
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellMacBook;