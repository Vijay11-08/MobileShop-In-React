import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BuyIphone = () => {
  const [iphones, setIphones] = useState([]);

  useEffect(() => {
    // Fetch iPhone products from API
    axios.get("/api/products?category=iphone")
      .then(response => setIphones(response.data))
      .catch(error => console.error("Error fetching iPhones:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Buy iPhone</h2>
      <div className="row">
        {iphones.length > 0 ? (
          iphones.map((phone) => (
            <div key={phone.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={phone.image_url} className="card-img-top" alt={phone.name} />
                <div className="card-body">
                  <h5 className="card-title">{phone.name}</h5>
                  <p className="card-text">{phone.description}</p>
                  <h6 className="text-success">Price: ${phone.price}</h6>
                  <Link to={`/product/${phone.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No iPhones available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default BuyIphone;
