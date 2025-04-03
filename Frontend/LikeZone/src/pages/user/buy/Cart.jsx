import React from "react";

const Cart = ({ cartItems = [] }) => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={`/Image/${item.image}`} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
