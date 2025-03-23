import { useState } from "react";

const productsData = [
  { name: "iPhone 15 Pro", price: 999.99, image: "iphone15pro.jpg" },
  { name: "iPhone 15", price: 799.99, image: "iphone15.jpg" },
  { name: "iPhone 14", price: 699.99, image: "iphone14.jpg" },
  { name: "iPhone 13", price: 599.99, image: "iphone13.jpg" },
];

export default function BuyIphones() {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prevFilters) =>
      checked ? [...prevFilters, value] : prevFilters.filter((item) => item !== value)
    );
  };

  const filteredProducts = filters.length
    ? productsData.filter((product) => filters.includes(product.name))
    : productsData;

  return (
    <div className="flex max-w-6xl mx-auto mt-5 p-4">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-3">Filters</h2>
        <div>
          {productsData.map((product) => (
            <label key={product.name} className="block text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                value={product.name}
                onChange={handleFilterChange}
                className="mr-2"
              />
              {product.name}
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-5">
        <h1 className="text-2xl font-bold mb-4">Buy iPhones</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <div key={product.name} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src={product.image} alt={product.name} className="w-full rounded-md" />
              <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
              <p className="text-red-600 font-bold">From <span className="text-orange-500">${product.price.toFixed(2)}</span></p>
              <button className="bg-orange-500 text-white w-full mt-3 p-2 rounded-md hover:bg-orange-600">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}