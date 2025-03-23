import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SellMacDesktop = () => {
  const macModels = [
    "Sell iMac",
    "Sell Mac mini",
    "Mac Studio",
    "Mac Pro"
  ];

  const faqs = [
    {
      question: "How can I sell an Apple Mac desktop computer online?",
      answer:
        "Selling or trading in your Mac desktop online with SmartphonesPLUS is easy and takes just a few minutes. Simply select your Mac computer’s model and get an instant quote. Then, package your device and ship it to us for free. We’ll send your payout to your selected payment method."
    },
    {
      question: "What Mac model do I have?",
      answer:
        "You can check your Mac model by clicking on the Apple logo in the top-left corner of your screen and selecting 'About This Mac.'"
    },
    {
      question: "When should I sell my Mac?",
      answer:
        "It’s best to sell your Mac before a new model is released to get the highest value for your device."
    },
    {
      question: "How fast do I get paid for my Mac?",
      answer:
        "Once we receive and inspect your Mac, we process the payment within 24-48 hours."
    },
    {
      question: "Why should I trust SmartphonesPLUS when selling my Mac?",
      answer:
        "SmartphonesPLUS is a trusted platform with secure transactions and thousands of satisfied customers."
    },
    {
      question: "How do I prepare my Mac for sale?",
      answer:
        "Before selling, back up your data, sign out of iCloud, and reset your Mac to factory settings."
    },
    {
      question: "Can I sell Apple Mac desktop computers in bulk?",
      answer:
        "Yes! If you have multiple Mac desktops to sell, contact us for a custom quote and bulk pricing."
    }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Sell Your Mac Desktop</h1>
      <p className="text-center">Select your Mac Desktop to sell</p>
      <p className="text-center">
        <a href="#">Can’t find your device? Click here</a>
      </p>
      
      <div className="row text-center">
        {macModels.map((model, index) => (
          <div className="col-md-3 mt-3" key={index}>
            <button className="btn btn-primary w-100">{model}</button>
          </div>
        ))}
      </div>

      <h2 className="mt-5">FAQs & Tips When Selling Your Mac Desktop Online</h2>
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
            <div
              id={`faq${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellMacDesktop;