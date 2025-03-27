import React, { useEffect, useState } from "react";

const BuyIpad = () => {
  const [ipads, setIpads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Replace with your actual backend API URL
      .then((response) => response.json())
      .then((data) => {
        // Filter only iPads (assuming 'category_id' or 'name' identifies iPads)
        const ipadItems = data.filter((item) =>
          item.name.toLowerCase().includes("ipad") || item.category_id === 6
        );
        setIpads(ipadItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching iPads:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading iPads...</p>;
  }

  return (
    <div className="buy-page">
      <h2>📱 Buy iPad</h2>
      <ul>
        {ipads.length > 0 ? (
          ipads.map((ipad) => (
            <li key={ipad.id}>
              <img src={ipad.image_url} alt={ipad.name} className="device-image" />
              <div>
                <h3>{ipad.name}</h3>
                <p>{ipad.description}</p>
                <strong>Price: {ipad.price}</strong>
              </div>
              <button className="buy-btn">Buy Now</button>
            </li>
          ))
        ) : (
          <p>No iPads available.</p>
        )}
      </ul>
    </div>
  );
};

export default BuyIpad;
