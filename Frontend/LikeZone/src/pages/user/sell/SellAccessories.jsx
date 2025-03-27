import React, { useState } from 'react';

const SellAccessories = () => {
  const [formData, setFormData] = useState({
    accessoryName: '',
    condition: 'New',
    expectedPrice: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Your accessory listing has been submitted!');
  };

  return (
    <div className="container mt-5">
      <h2>Sell Your Accessory</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Accessory Name</label>
          <input type="text" name="accessoryName" className="form-control" value={formData.accessoryName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Condition</label>
          <select name="condition" className="form-select" value={formData.condition} onChange={handleChange}>
            <option value="New">New</option>
            <option value="Used">Used</option>
            <option value="Refurbished">Refurbished</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Expected Price ($)</label>
          <input type="number" name="expectedPrice" className="form-control" value={formData.expectedPrice} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Information</label>
          <input type="text" name="contact" className="form-control" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SellAccessories;
