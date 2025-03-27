import React, { useState } from "react";
import { Link } from "react-router-dom";

const samsungMobiles = [
  { id: 1, name: "Samsung Galaxy S24 Ultra", price: 129999, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Samsung Galaxy Z Flip5", price: 99999, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Samsung Galaxy A54", price: 41999, image: "https://via.placeholder.com/150" },
];

const BuySamsung = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (mobile) => {
    setCart([...cart, mobile]);
    alert(`${mobile.name} added to cart!`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Buy Samsung Mobiles</h2>
      <div className="row">
        {samsungMobiles.map((mobile) => (
          <div className="col-md-4 mb-4" key={mobile.id}>
            <div className="card p-3">
              <img src={mobile.image} alt={mobile.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{mobile.name}</h5>
                <p className="card-text">Price: ₹{mobile.price}</p>
                <button className="btn btn-primary me-2" onClick={() => addToCart(mobile)}>
                  Add to Cart
                </button>
                <Link to="/checkout" className="btn btn-success">Buy Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySamsung;
