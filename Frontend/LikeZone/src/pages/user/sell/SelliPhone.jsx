import React, { useState } from "react";

const SelliPhone = () => {
  const [formData, setFormData] = useState({
    name: "iPhone",
    description: "",
    price: "",
    stock: "",
    category_id: 1, // Assuming category ID for iPhone is 1
    image_url: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("iPhone listed successfully!");
        setFormData({
          name: "iPhone",
          description: "",
          price: "",
          stock: "",
          category_id: 1,
          image_url: "",
        });
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="sell-page">
      <h2>📱 Sell Your iPhone</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          required
        />

        <button type="submit">List iPhone</button>
      </form>
    </div>
  );
};

export default SelliPhone;
