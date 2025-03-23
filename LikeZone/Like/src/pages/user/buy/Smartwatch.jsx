import React, { useState } from "react";
// import "./SmartwatchShop.css"; // External CSS file for styling

const productsData = [
  { name: "Apple Watch", price: 399.99, image: "applewatch.jpg" },
  { name: "Samsung Galaxy Watch", price: 299.99, image: "samsungwatch.jpg" },
  { name: "Garmin Watch", price: 249.99, image: "garminwatch.jpg" },
  { name: "Fitbit", price: 199.99, image: "fitbit.jpg" },
];

const SmartwatchShop = () => {
  const [selectedFilters, setSelectedFilters] = useState(new Set());

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    setSelectedFilters((prevFilters) => {
      const newFilters = new Set(prevFilters);
      newFilters.has(filter) ? newFilters.delete(filter) : newFilters.add(filter);
      return newFilters;
    });
  };

  const filteredProducts = productsData.filter(
    (product) => selectedFilters.size === 0 || selectedFilters.has(product.name)
  );

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          {productsData.map((product) => (
            <label key={product.name}>
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

      {/* Main Content */}
      <main className="main-content">
        <h1>Buy Smartwatches</h1>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product" key={product.name}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">From <span>${product.price.toFixed(2)}</span></p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SmartwatchShop;