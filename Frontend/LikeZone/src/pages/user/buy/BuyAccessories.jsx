import React, { useEffect, useState } from "react";

const BuyAccessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Replace with your actual backend API URL
      .then((response) => response.json())
      .then((data) => {
        // Filter only Accessories (assuming 'category_id' or 'name' identifies Accessories)
        const accessoryItems = data.filter((item) =>
          item.name.toLowerCase().includes("accessory") || item.category_id === 4
        );
        setAccessories(accessoryItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching accessories:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Accessories...</p>;
  }

  return (
    <div className="buy-page">
      <h2>🛍️ Buy Accessories</h2>
      <ul>
        {accessories.length > 0 ? (
          accessories.map((accessory) => (
            <li key={accessory.id}>
              <img src={accessory.image_url} alt={accessory.name} className="device-image" />
              <div>
                <h3>{accessory.name}</h3>
                <p>{accessory.description}</p>
                <strong>Price: {accessory.price}</strong>
              </div>
              <button className="buy-btn">Buy Now</button>
            </li>
          ))
        ) : (
          <p>No accessories available.</p>
        )}
      </ul>
    </div>
  );
};

export default BuyAccessories;
