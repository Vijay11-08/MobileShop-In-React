import React, { useEffect, useState } from "react";

const BuyAndroid = () => {
  const [androidPhones, setAndroidPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Replace with your actual backend API URL
      .then((response) => response.json())
      .then((data) => {
        // Filter only Android phones (assuming 'category_id' or 'name' identifies Android devices)
        const androidDevices = data.filter((phone) =>
          phone.name.toLowerCase().includes("android") || phone.category_id === 2
        );
        setAndroidPhones(androidDevices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Android phones:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Android phones...</p>;
  }

  return (
    <div className="buy-page">
      <h2>📱 Buy Android Phones</h2>
      <ul>
        {androidPhones.length > 0 ? (
          androidPhones.map((phone) => (
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
          <p>No Android phones available.</p>
        )}
      </ul>
    </div>
  );
};

export default BuyAndroid;
