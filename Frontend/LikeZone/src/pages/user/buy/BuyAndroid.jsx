import React, { useState } from 'react';
import "../../../assets/Accessories.css";

const productsData = [
    { id: 1, name: 'Google Pixel 8', price: 799.99, image: "./images/pixel8.jpg" },
    { id: 2, name: 'OnePlus 12', price: 899.99, image: "./images/oneplus12.jpg" },
    { id: 3, name: 'Samsung Galaxy S24', price: 999.99, image: "./images/samsung_s24.jpg" },
    { id: 4, name: 'Xiaomi 13 Pro', price: 749.99, image: "./images/xiaomi13.jpg" },
    { id: 5, name: 'Oppo Find X6', price: 699.99, image: "./images/oppo_x6.jpg" },
];

const BuyAndroid = () => {
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
                <h1>Buy Android Phones</h1>
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

export default BuyAndroid;
