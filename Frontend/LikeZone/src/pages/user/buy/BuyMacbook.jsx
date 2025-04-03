import React, { useState } from "react";
import "../../../assets/Accessories.css";


const products = [
  { id: 1, name: "MacBook Air", price: "$999.99", image: "./images/i_temp.png" },
  { id: 2, name: "MacBook Pro", price: "$1299.99", image: "./images/i_temp.png" },
  { id: 3, name: "MacBook Air", price: "$999.99", image: "./images/i_temp.png" },
  { id: 4, name: "MacBook Pro", price: "$1299.99", image: "./images/i_temp.png" },
  { id: 5, name: "MacBook Air", price: "$999.99", image: "./images/i_temp.png" },
  { id: 6, name: "MacBook Pro", price: "$1299.99", image: "./images/i_temp.png" },
  { id: 7, name: "MacBook Air", price: "$999.99", image: "./images/i_temp.png" },
  { id: 8, name: "MacBook Pro", price: "$1299.99", image: "./images/i_temp.png" },
  { id: 9, name: "MacBook Air", price: "$999.99", image: "./images/i_temp.png" },
];

const BuyMacbook = () => {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prevFilters) =>
      checked ? [...prevFilters, value] : prevFilters.filter((filter) => filter !== value)
    );
  };

  const filteredProducts = filters.length
    ? products.filter((product) => filters.includes(product.name))
    : products;

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          <label>
            <input type="checkbox" value="MacBook Air" onChange={handleFilterChange} /> MacBook Air
          </label>
          <label>
            <input type="checkbox" value="MacBook Pro" onChange={handleFilterChange} /> MacBook Pro
          </label>
        </div>
      </aside>
      <main className="main-content">
        <h1>Buy MacBooks</h1>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">From <span>{product.price}</span></p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BuyMacbook;
