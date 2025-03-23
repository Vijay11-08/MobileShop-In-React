import React, { useState } from "react";

const productsData = [
  { id: 1, name: "iPad Air", price: "$599.99", image: "ipadair.jpg" },
  { id: 2, name: "iPad Pro", price: "$999.99", image: "ipadpro.jpg" },
  { id: 3, name: "Samsung Galaxy Tab", price: "$499.99", image: "samsungtab.jpg" },
  { id: 4, name: "Lenovo Tab", price: "$299.99", image: "lenovotab.jpg" },
];

const Sidebar = ({ onFilterChange, selectedFilters }) => {
  const filters = ["iPad Air", "iPad Pro", "Samsung Galaxy Tab", "Lenovo Tab"];

  return (
    <aside>
      <h2>Filters</h2>
      <div>
        {filters.map((filter) => (
          <label key={filter}>
            <input
              type="checkbox"
              value={filter}
              checked={selectedFilters.includes(filter)}
              onChange={() => onFilterChange(filter)}
            />
            {filter}
          </label>
        ))}
      </div>
    </aside>
  );
};

const ProductList = ({ products, selectedFilters }) => {
  const filteredProducts =
    selectedFilters.length === 0
      ? products
      : products.filter((product) => selectedFilters.includes(product.name));

  return (
    <main>
      <h1>Buy iPads & Tablets</h1>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={`/images/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>From <span>{product.price}</span></p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </main>
  );
};

const Ipad = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  return (
    <div>
      <Sidebar onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
      <ProductList products={productsData} selectedFilters={selectedFilters} />
    </div>
  );
};

export default Ipad;