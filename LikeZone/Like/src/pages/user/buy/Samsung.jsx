import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BuySamsung = () => {
  const products = [
    { name: "Samsung Galaxy S24", price: "$999.99", img: "s24.jpg" },
    { name: "Samsung Galaxy Z Fold 5", price: "$1,799.99", img: "zfold5.jpg" },
    { name: "Samsung Galaxy Z Flip 5", price: "$999.99", img: "zflip5.jpg" },
    { name: "Samsung Galaxy A54", price: "$449.99", img: "a54.jpg" },
  ];

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) =>
      checked ? [...prevFilters, value] : prevFilters.filter((filter) => filter !== value)
    );
  };

  const filteredProducts = selectedFilters.length
    ? products.filter((product) => selectedFilters.includes(product.name))
    : products;

  return (
    <div className="container mt-5 d-flex">
      {/* Sidebar with Filters */}
      <aside className="p-3 bg-white border rounded me-4" style={{ width: "250px" }}>
        <h2>Filters</h2>
        <div className="filter-group">
          {products.map((product, index) => (
            <label key={index} className="d-block">
              <input
                type="checkbox"
                value={product.name}
                onChange={handleFilterChange}
                className="me-2"
              />
              {product.name}
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1">
        <h1 className="mb-4">Buy Samsung Phones</h1>
        <div className="row">
          {filteredProducts.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card text-center">
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="price text-danger">From <span className="text-warning">{product.price}</span></p>
                  <button className="btn btn-warning w-100">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BuySamsung;