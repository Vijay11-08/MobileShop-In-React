import React from "react";
import { Link } from "react-router-dom";

const SellPage = () => {
  const products = [
    { id: 1, name: "Sell iPhone", route: "/sell/iphone" },
    { id: 2, name: "Sell Samsung", route: "/sell/samsung" },
    { id: 3, name: "Sell Android", route: "/sell/android" },
    { id: 4, name: "Sell iPad", route: "/sell/ipad" },
    { id: 5, name: "Sell Smartwatch", route: "/sell/smartwatch" },
    { id: 6, name: "Sell MacBook", route: "/sell/macbook" },
    { id: 7, name: "Sell Accessories", route: "/sell/accessories" },
  ];

  return (
    <div className="sell-page">
      <h2>📱 Sell Your Mobile Device</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <Link to={product.route}>
              <button className="sell-btn">Sell Now</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellPage;
