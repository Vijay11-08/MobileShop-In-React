import React, { useState } from "react";
import "./ClearanceDeals.css"; // External CSS file for styling

const productsData = [
  { id: 1, name: "Laptop", image: "laptop.jpg", title: "Discounted Laptop", price: "$499.99" },
  { id: 2, name: "Smartphone", image: "smartphone.jpg", title: "Clearance Smartphone", price: "$299.99" },
  { id: 3, name: "Accessories", image: "accessories.jpg", title: "Accessories Bundle", price: "$49.99" },
];

const ClearanceDeals = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(value)
        ? prevFilters.filter((filter) => filter !== value)
        : [...prevFilters, value]
    );
  };

  const filteredProducts = productsData.filter(
    (product) => selectedFilters.length === 0 || selectedFilters.includes(product.name)
  );

  return (
    <div className="container">
      {/* Sidebar with Filters */}
      <aside className="sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          {['Laptop', 'Smartphone', 'Accessories'].map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                onChange={handleFilterChange}
                checked={selectedFilters.includes(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Clearance Sale</h1>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.title}</h3>
              <p className="price">Now Only <span>{product.price}</span></p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ClearanceDeals;