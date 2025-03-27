import React, { useEffect, useState } from "react";

const BuyMacbook = () => {
  const [macbooks, setMacbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Replace with your actual backend API URL
      .then((response) => response.json())
      .then((data) => {
        // Filter only MacBooks (assuming 'category_id' or 'name' identifies MacBooks)
        const macbookItems = data.filter((item) =>
          item.name.toLowerCase().includes("macbook") || item.category_id === 7
        );
        setMacbooks(macbookItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching MacBooks:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading MacBooks...</p>;
  }

  return (
    <div className="buy-page">
      <h2>💻 Buy MacBook</h2>
      <ul>
        {macbooks.length > 0 ? (
          macbooks.map((macbook) => (
            <li key={macbook.id}>
              <img src={macbook.image_url} alt={macbook.name} className="device-image" />
              <div>
                <h3>{macbook.name}</h3>
                <p>{macbook.description}</p>
                <strong>Price: {macbook.price}</strong>
              </div>
              <button className="buy-btn">Buy Now</button>
            </li>
          ))
        ) : (
          <p>No MacBooks available.</p>
        )}
      </ul>
    </div>
  );
};

export default BuyMacbook;
