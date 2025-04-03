import React, { useState } from 'react';
import "../../../assets/Accessories.css"
const productsData = [
    { id: 1, name: 'AirPods', price: 199.99, image: "./images/i_buds.jpg" },  // Updated path
    { id: 2, name: 'MagSafe Charger', price: 39.99, image: "./images/s_charger.jpg" },  // Updated path
    { id: 3, name: 'Apple Watch', price: 399.99, image: "./images/o_charger.jpg" },  // Updated path
    { id: 4, name: 'iPad Keyboard', price: 149.99, image: "./images/r_charger.jpg" },  // Updated path
];

const BuyAccessories = () => {
    const [filters, setFilters] = useState([]);

    const handleFilterChange = (event) => {
        const { value, checked } = event.target;
        setFilters(prevFilters => checked ? [...prevFilters, value] : prevFilters.filter(f => f !== value));
    };

    const filteredProducts = filters.length === 0 ? productsData : productsData.filter(p => filters.includes(p.name));

    return (
        <div className="container">
            <aside className="sidebar">
                <h2>Filters</h2>
                <div className="filter-group">
                    {productsData.map(product => (
                        <label key={product.id}>
                            <input type="checkbox" value={product.name} onChange={handleFilterChange} /> {product.name}
                        </label>
                    ))}
                </div>
            </aside>

            <main className="main-content">
                <h1>Buy Accessories</h1>
                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product">
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

export default BuyAccessories;
