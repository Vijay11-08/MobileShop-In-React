import React, { useEffect, useState } from "react";

const BuySmartwatch = () => {
  const [smartwatches, setSmartwatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Replace with your actual backend API URL
      .then((response) => response.json())
      .then((data) => {
        // Filter only Smartwatches (assuming 'category_id' or 'name' identifies Smartwatches)
        const smartwatchItems = data.filter((item) =>
          item.name.toLowerCase().includes("smartwatch") || item.category_id === 5
        );
        setSmartwatches(smartwatchItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching smartwatches:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Smartwatches...</p>;
  }

  return (
    <div className="buy-page">
      <h2>⌚ Buy Smartwatch</h2>
      <ul>
        {smartwatches.length > 0 ? (
          smartwatches.map((watch) => (
            <li key={watch.id}>
              <img src={watch.image_url} alt={watch.name} className="device-image" />
              <div>
                <h3>{watch.name}</h3>
                <p>{watch.description}</p>
                <strong>Price: {watch.price}</strong>
              </div>
              <button className="buy-btn">Buy Now</button>
            </li>
          ))
        ) : (
          <p>No smartwatches available.</p>
        )}
      </ul>
    </div>
  );
};

export default BuySmartwatch;
