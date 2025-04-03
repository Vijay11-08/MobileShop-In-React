import React, { useState } from "react";
import "../../../assets/Accessories.css";

const smartwatches = [
  { name: "Apple Watch", price: "$399.99", image: "ise.jpg" },
  { name: "Samsung Galaxy Watch", price: "$299.99", image: "ise.jpg" },
  { name: "Garmin Watch", price: "$249.99", image: "ise.jpg" },
  { name: "Fitbit", price: "$199.99", image: "ise.jpg" },
];

const BuySmartwatch = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(value)
        ? prevFilters.filter((filter) => filter !== value)
        : [...prevFilters, value]
    );
  };

  const filteredProducts = smartwatches.filter(
    (watch) => selectedFilters.length === 0 || selectedFilters.includes(watch.name)
  );

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          {smartwatches.map((watch) => (
            <label key={watch.name}>
              <input
                type="checkbox"
                value={watch.name}
                onChange={handleFilterChange}
              />
              {watch.name}
            </label>
          ))}
        </div>
      </aside>
      <main className="main-content">
        <h1>Buy Smartwatches</h1>
        <div className="products-grid">
          {filteredProducts.map((watch) => (
            <div className="product" key={watch.name}>
              <img src={`/Image/${watch.image}`} alt={watch.name} />
              <h3>{watch.name}</h3>
              <p className="price">From <span>{watch.price}</span></p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BuySmartwatch;
