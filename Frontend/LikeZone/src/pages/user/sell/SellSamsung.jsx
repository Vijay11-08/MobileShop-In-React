import React, { useState } from "react";

const SellSamsung = () => {
  const [formData, setFormData] = useState({
    model: "",
    condition: "",
    price: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Samsung Phone Listed Successfully!");
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h2>Sell Your Samsung Phone</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Samsung Model</label>
          <input
            type="text"
            className="form-control"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Condition</label>
          <select
            className="form-control"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          >
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Like New">Like New</option>
            <option value="Used">Used</option>
            <option value="Damaged">Damaged</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Expected Price ($)</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Information</label>
          <input
            type="text"
            className="form-control"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SellSamsung;
