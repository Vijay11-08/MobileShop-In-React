import "../../../assets/Accessories.css";
import React, { useState } from "react";

const samsungPhones = [
  { name: "Samsung Galaxy S24", price: 999.99, image: "/images/s_phone.jpg" },
  { name: "Samsung Galaxy Z Fold 5", price: 1799.99, image: "/images/s_phone.jpg" },
  { name: "Samsung Galaxy Z Flip 5", price: 999.99, image: "/images/s_phone.jpg" },
  { name: "Samsung Galaxy A54", price: 449.99, image: "/images/s_phone.jpg" },
];

const BuySamsung = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) =>
      checked ? [...prevFilters, value] : prevFilters.filter((filter) => filter !== value)
    );
  };

  const filteredProducts = selectedFilters.length
    ? samsungPhones.filter((phone) => selectedFilters.includes(phone.name))
    : samsungPhones;

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          {samsungPhones.map((phone) => (
            <label key={phone.name}>
              <input
                type="checkbox"
                value={phone.name}
                onChange={handleFilterChange}
              />
              {phone.name}
            </label>
          ))}
        </div>
      </aside>

      <main className="main-content">
        <h1>Buy Samsung Phones</h1>
        <div className="products-grid">
          {filteredProducts.map((phone) => (
            <div className="product" key={phone.name}>
              <img src={phone.image} alt={phone.name} />
              <h3>{phone.name}</h3>
              <p className="price">From <span>${phone.price.toFixed(2)}</span></p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BuySamsung;

