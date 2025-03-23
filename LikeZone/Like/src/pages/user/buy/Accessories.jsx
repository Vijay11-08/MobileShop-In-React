import { useState } from "react";

const accessories = [
  { name: "AirPods", image: "airpods.jpg", price: "$199.99" },
  { name: "MagSafe Charger", image: "magsafe.jpg", price: "$39.99" },
  { name: "Apple Watch", image: "applewatch.jpg", price: "$399.99" },
  { name: "iPad Keyboard", image: "ipadkeyboard.jpg", price: "$149.99" },
];

export default function BuyAccessories() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredProducts = selectedFilters.length
    ? accessories.filter((product) => selectedFilters.includes(product.name))
    : accessories;

  return (
    <div className="flex max-w-5xl mx-auto p-5 gap-5">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        {accessories.map((item) => (
          <label key={item.name} className="block text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => toggleFilter(item.name)}
              checked={selectedFilters.includes(item.name)}
            />
            {item.name}
          </label>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-5">
        <h1 className="text-2xl font-bold mb-5">Buy Accessories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
              <p className="text-red-500 font-bold">From <span className="text-orange-500">{product.price}</span></p>
              <button className="bg-orange-500 text-white px-4 py-2 mt-3 w-full rounded-lg hover:bg-orange-600">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}