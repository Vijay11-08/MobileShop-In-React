import React, { useState } from "react";
import UserHeader from "../../../components/UserHeader";
import UserFooter from "../../../components/UserFooter";

const productsData = [
    { id: 1, name: "iPhone 15 Pro", price: "$999.99", image: "iphone15pro.jpg" },
    { id: 2, name: "iPhone 15", price: "$799.99", image: "iphone15.jpg" },
    { id: 3, name: "iPhone 14", price: "$699.99", image: "iphone14.jpg" },
    { id: 4, name: "iPhone 13", price: "$599.99", image: "iphone13.jpg" }
];

const FilterSidebar = ({ selectedFilters, setSelectedFilters }) => {
    const handleFilterChange = (event) => {
        const { value, checked } = event.target;
        setSelectedFilters(prev =>
            checked ? [...prev, value] : prev.filter(filter => filter !== value)
        );
    };

    return (
        <aside className="sidebar">
            <h2>Filters</h2>
            <div className="filter-group">
                {productsData.map(product => (
                    <label key={product.id}>
                        <input
                            type="checkbox"
                            value={product.name}
                            checked={selectedFilters.includes(product.name)}
                            onChange={handleFilterChange}
                        /> {product.name}
                    </label>
                ))}
            </div>
        </aside>
    );
};

const ProductList = ({ selectedFilters }) => {
    const filteredProducts = selectedFilters.length
        ? productsData.filter(product => selectedFilters.includes(product.name))
        : productsData;

    return (
        <div className="products-grid">
            {filteredProducts.map(product => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p className="price">From <span>{product.price}</span></p>
                    <button>Buy Now</button>
                </div>
            ))}
        </div>
    );
};

const BuyIPhones = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    return (
        
        <div className="container">
            <UserHeader/>
           <h1>Buy IPhones</h1>
            <UserFooter/>
        </div>
    );
};

export default BuyIPhones;
