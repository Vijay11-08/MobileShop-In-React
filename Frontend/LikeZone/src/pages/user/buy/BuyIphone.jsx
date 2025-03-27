import React, { useEffect, useState } from "react";

const BuyIphone = () => {
  const [iphones, setIphones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Replace with your actual backend API URL
      .then((response) => response.json())
      .then((data) => {
        // Filter only iPhones (assuming 'category_id' or 'name' identifies iPhones)
        const iphoneDevices = data.filter((phone) =>
          phone.name.toLowerCase().includes("iphone") || phone.category_id === 1
        );
        setIphones(iphoneDevices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching iPhones:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading iPhones...</p>;
  }

  return (
    <div className="buy-page">
      <h2>📱 Buy iPhones</h2>
      <ul>
        {iphones.length > 0 ? (
          iphones.map((phone) => (
            <li key={phone.id}>
              <img src={phone.image_url} alt={phone.name} className="phone-image" />
              <div>
                <h3>{phone.name}</h3>
                <p>{phone.description}</p>
                <strong>Price: {phone.price}</strong>
              </div>
              <button className="buy-btn">Buy Now</button>
            </li>
          ))
        ) : (
          <p>No iPhones available.</p>
        )}
      </ul>
    </div>
  );
};

export default BuyIphone;
