import { useState } from "react";

const AddProduct = ({ categories = [] }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Price: "",
    ImageUrl: null,
    CategoryId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, ImageUrl: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch("/Product/Add", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Product added successfully!");
        setFormData({
          Name: "",
          Description: "",
          Price: "",
          ImageUrl: null,
          CategoryId: "",
        });
      } else {
        alert("Failed to add product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white border border-orange-500 rounded-lg shadow-xl"
      >
        <h2 className="mb-6 text-3xl font-bold text-center text-orange-600">
          Add Product
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Description:
          </label>
          <textarea
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Price:
          </label>
          <input
            type="number"
            name="Price"
            step="0.01"
            value={formData.Price}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Image:
          </label>
          <input
            type="file"
            name="ImageUrl"
            onChange={handleFileChange}
            required
            className="w-full p-2 border border-orange-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Category:
          </label>
          <select
            name="CategoryId"
            value={formData.CategoryId}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="">Select Category</option>
            {categories.length > 0 ? (
              categories.map((category) => (
                <option key={category.CategoryId} value={category.CategoryId}>
                  {category.Name}
                </option>
              ))
            ) : (
              <option disabled>No categories available</option>
            )}
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out transform bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
