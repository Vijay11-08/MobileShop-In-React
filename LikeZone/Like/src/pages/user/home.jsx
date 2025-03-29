import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap is imported

const Home = () => {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="container-fluid text-center bg-primary text-white p-5 rounded">
        <h1>Welcome to MobileShop</h1>
        <p>Find the best mobile phones at the best prices</p>
        <button className="btn btn-light mt-2">Shop Now</button>
      </div>

      {/* Featured Products */}
      <div className="mt-4">
        <h2 className="text-center">Featured Phones</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {[
            { name: "iPhone 14", price: "$999" },
            { name: "Samsung S23", price: "$899" },
            { name: "OnePlus 11", price: "$749" },
          ].map((phone, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt={phone.name}
                />
                <div className="card-body text-center">
                  <p className="card-text">{phone.name} - {phone.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

