import React, { useState } from "react";

const products = [
    { name: "Samsung Galaxy S24", price: "$999.99", image: "/images/s_phone.jpg" },
    { name: "Samsung Galaxy Z Fold 5", price: "$1,799.99", image: "/images/s_phone.jpg" },
    { name: "Samsung Galaxy Z Flip 5", price: "$999.99", image: "/images/s_phone.jpg" },
    { name: "Samsung Galaxy A54", price: "$449.99", image: "/images/s_phone.jpg" }
];

const BuySamsung = () => {
    const [filters, setFilters] = useState([]);

    const handleFilterChange = (event) => {
        const { value, checked } = event.target;
        setFilters((prev) => 
            checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
    };

    const filteredProducts = filters.length
        ? products.filter((product) => filters.includes(product.name))
        : products;

    return (
        <div className="flex max-w-6xl p-4 mx-auto">
            {/* Sidebar */}
            <aside className="w-64 p-5 bg-white rounded-lg shadow-md">
                <h2 className="mb-3 text-lg font-semibold">Filters</h2>
                <div className="space-y-2">
                    {products.map((product) => (
                        <label key={product.name} className="block text-gray-700 cursor-pointer">
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
            <main className="flex-1 p-5">
                <h1 className="mb-4 text-2xl font-bold">Buy Samsung Phones</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <div key={product.name} className="p-4 text-center bg-white rounded-lg shadow-md">
                            <img src={product.image} alt={product.name} className="w-full rounded-md" />
                            <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
                            <p className="font-bold text-red-500">From <span className="text-orange-500">{product.price}</span></p>
                            <button className="w-full py-2 mt-3 text-white bg-orange-500 rounded-md hover:bg-orange-600">
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default BuySamsung;