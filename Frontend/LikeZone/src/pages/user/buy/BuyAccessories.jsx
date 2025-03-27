import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BuyAccessories = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    axios.get("/api/products?category=accessories")
      .then(response => setAccessories(response.data))
      .catch(error => console.error("Error fetching accessories:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Buy Accessories</h2>
      <div className="row">
        {accessories.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image_url} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyAccessories;
