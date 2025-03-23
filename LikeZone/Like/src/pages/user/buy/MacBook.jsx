import { useState } from "react";

const products = [
  { id: 1, name: "MacBook Air", price: 999.99, image: "macbookair.jpg" },
  { id: 2, name: "MacBook Pro", price: 1299.99, image: "macbookpro.jpg" }
];

export default function MacBookShop() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(value)
        ? prevFilters.filter((filter) => filter !== value)
        : [...prevFilters, value]
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedFilters.length === 0 || selectedFilters.includes(product.name)
  );

  return (
    <div className="flex max-w-5xl mx-auto p-4 gap-4">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-3">Filters</h2>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" value="MacBook Air" onChange={handleFilterChange} />
            <span>MacBook Air</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" value="MacBook Pro" onChange={handleFilterChange} />
            <span>MacBook Pro</span>
          </label>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Buy MacBooks</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src={product.image} alt={product.name} className="w-full h-auto rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-red-600 font-bold">From <span className="text-orange-500">${product.price}</span></p>
              <button className="bg-orange-500 text-white w-full mt-2 p-2 rounded-md hover:bg-orange-600">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}