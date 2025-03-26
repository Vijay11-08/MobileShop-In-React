import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { id: 1, name: "Sell iPhone", image: "/images/sell_iphone.jpg" },
  { id: 2, name: "Sell Samsung", image: "/images/sell_samsung.jpg" },
  { id: 3, name: "Sell Android", image: "/images/sell_android.jpg" }
];

const CategoryCard = ({ category }) => (
  <div className="col-md-4">
    <div className="category-card p-3 text-center shadow-sm rounded">
      <img src={category.image} alt={category.name} className="img-fluid rounded" />
      <h5 className="mt-3">{category.name}</h5>
      <a href="#" className="btn btn-warning mt-2">Sell Now</a>
    </div>
  </div>
);

const FAQ = () => (
  <div className="mt-5">
    <h3>FAQs & Tips For Trading In Your Electronics Online</h3>
    <div className="accordion" id="faqAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
            How do I sell my phone online?
          </button>
        </h2>
        <div id="faq1" className="accordion-collapse collapse show">
          <div className="accordion-body">
            Selling your phone online is easy! Select your phone model, get an instant quote, package it, and ship it for free. Get paid via your selected payment method.
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SellPage = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Sell Used Phones Online for Cash!</h2>
      <p className="text-center">Find the device you’d like to trade in and get instant cash offers.</p>

      <div className="input-group mb-4 mx-auto" style={{ maxWidth: "500px" }}>
        <input type="text" className="form-control" placeholder="Search devices..." aria-label="Search devices" />
        <button className="btn btn-warning">Search</button>
      </div>

      <div className="row justify-content-center">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="text-center mt-4">
        <p>Can’t find your device? <a href="#" className="text-warning fw-bold">Click here</a></p>
      </div>

      <FAQ />

      <div className="text-center mt-4">
        <p>Still have questions? <a href="#" className="text-warning fw-bold">Contact Support</a></p>
      </div>
    </div>
  );
};

export default SellPage;