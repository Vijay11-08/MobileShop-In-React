import React, { useEffect, useState } from "react";

const BuySamsung = () => {
  const [samsungPhones, setSamsungPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Replace with your actual backend API URL
      .then((response) => response.json())
      .then((data) => {
        // Filter only Samsung phones (assuming 'category_id' or 'name' identifies Samsung devices)
        const samsungDevices = data.filter((phone) =>
          phone.name.toLowerCase().includes("samsung") || phone.category_id === 2
        );
        setSamsungPhones(samsungDevices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Samsung phones:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Samsung phones...</p>;
  }

  return (
    <div className="buy-page">
      <h2>📱 Buy Samsung Phones</h2>
      <ul>
        {samsungPhones.length > 0 ? (
          samsungPhones.map((phone) => (
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
          <p>No Samsung phones available.</p>
        )}
      </ul>
    </div>
  );
};

export default BuySamsung;
