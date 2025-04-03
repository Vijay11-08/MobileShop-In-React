
import React, { useState } from "react";
import "../../../assets/Accessories.css";

const products = [
  { name: "iPad Air", image: "/images/ipad_air.jpg", price: "$599.99" },
  { name: "iPad Pro", image: "/images/ipad_pro.jpg", price: "$999.99" },
  { name: "Samsung Galaxy Tab", image: "/images/galaxy_tab.jpg", price: "$499.99" },
  { name: "Lenovo Tab", image: "/images/lenovo_tab.jpg", price: "$299.99" }
];

const BuyIpad = () => {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prev) =>
      checked ? [...prev, value] : prev.filter((filter) => filter !== value)
    );
  };

  const filteredProducts = products.filter(
    (product) => filters.length === 0 || filters.includes(product.name)
  );

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          {products.map((product, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={product.name}
                onChange={handleFilterChange}
              />
              {product.name}
            </label>
          ))}
        </div>
      </aside>
      <main className="main-content">
        <h1>Buy iPads & Tablets</h1>
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div className="product" key={index}>
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

export default BuyIpad;
