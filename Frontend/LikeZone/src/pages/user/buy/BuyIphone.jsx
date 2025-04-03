import React, { useState } from "react";
import "../../../assets/Accessories.css";

const iphones = [
  { name: "iPhone 15 Pro", price: "$999.99", image: "iphone15.jpeg" },
  { name: "iPhone 12", price: "$799.99", image: "iphone15.jpeg" },
  { name: "iPhone 14", price: "$699.99", image: "i_phone.jpg" },
  { name: "iPhone 13", price: "$599.99", image: "i_phone.jpg" },
  { name: "iPhone 15", price: "$799.99", image: "i_phone.jpg" },
];

const BuyIphone = ({ addToCart }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(value)
        ? prevFilters.filter((filter) => filter !== value)
        : [...prevFilters, value]
    );
  };

  const filteredProducts = iphones.filter(
    (phone) => selectedFilters.length === 0 || selectedFilters.includes(phone.name)
  );

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          {iphones.map((phone) => (
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
        <h1>Buy iPhones</h1>
        <div className="products-grid">
          {filteredProducts.map((phone) => (
            <div className="product" key={phone.name}>
              <img src={`/Image/${phone.image}`} alt={phone.name} />
              <h3>{phone.name}</h3>
              <p className="price">From <span>{phone.price}</span></p>
              <button onClick={() => addToCart(phone)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BuyIphone;
