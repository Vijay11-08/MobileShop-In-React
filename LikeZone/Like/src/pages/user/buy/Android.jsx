import React, { useState } from "react";

const products = [
  { id: 1, name: "Google Pixel 8", price: 799.99, image: "pixel8.jpg" },
  { id: 2, name: "OnePlus 12", price: 899.99, image: "oneplus12.jpg" },
  { id: 3, name: "Samsung Galaxy S24", price: 999.99, image: "s24.jpg" },
  { id: 4, name: "Xiaomi 13 Pro", price: 749.99, image: "xiaomi13pro.jpg" },
  { id: 5, name: "Oppo Find X6", price: 699.99, image: "oppo-findx6.jpg" },
];

const Sidebar = ({ selectedFilters, setSelectedFilters }) => {
  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    }
  };

  return (
    <aside className="sidebar">
      <h2>Filters</h2>
      <div className="filter-group">
        {products.map((product) => (
          <label key={product.id}>
            <input
              type="checkbox"
              value={product.name}
              onChange={handleFilterChange}
              checked={selectedFilters.includes(product.name)}
            />
            {product.name}
          </label>
        ))}
      </div>
    </aside>
  );
};

const ProductList = ({ selectedFilters }) => {
  const filteredProducts =
    selectedFilters.length === 0
      ? products
      : products.filter((product) => selectedFilters.includes(product.name));

  return (
    <div className="products-grid">
      {filteredProducts.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">From <span>${product.price.toFixed(2)}</span></p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
};

const Android = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <div className="container">
      <Sidebar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <main className="main-content">
        <h1>Buy Android Phones</h1>
        <ProductList selectedFilters={selectedFilters} />
      </main>
    </div>
  );
};

export default Android;