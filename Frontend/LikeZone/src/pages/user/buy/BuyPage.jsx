import React from "react";
import { Link } from "react-router-dom";

const BuyPage = () => {
  const products = [
    { id: 1, name: "iPhone 14", route: "/buy/iphone" },
    { id: 2, name: "Samsung Galaxy S23", route: "/buy/samsung" },
    { id: 3, name: "OnePlus 11", route: "/buy/android" },
    { id: 4, name: "iPad Pro", route: "/buy/ipad" },
    { id: 5, name: "Apple Watch", route: "/buy/smartwatch" },
    { id: 6, name: "MacBook Air", route: "/buy/macbook" },
    { id: 7, name: "Mobile Accessories", route: "/buy/accessories" },
  ];

  return (
    <div className="buy-page">
      <h2>📱 Buy Your Favorite Mobile Device</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <Link to={product.route}>
              <button className="buy-btn">Buy Now</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyPage;
