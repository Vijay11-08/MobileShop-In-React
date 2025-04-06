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
    <div className="flex items-center justify-center min-h-screen bg-black">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-lg p-8 text-center bg-gray-900 border rounded-lg shadow-xl border-cyan-500"
  >
    <h2 className="mb-6 text-3xl font-extrabold text-cyan-400">Add Product</h2>

    <div className="mb-4">
      <label className="block mb-2 text-lg font-medium text-white">Name:</label>
      <input
        type="text"
        name="Name"
        value={formData.Name}
        onChange={handleChange}
        required
        className="w-full p-3 text-white bg-gray-800 border rounded-lg border-cyan-500 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 text-lg font-medium text-white">Description:</label>
      <textarea
        name="Description"
        value={formData.Description}
        onChange={handleChange}
        required
        className="w-full p-3 text-white bg-gray-800 border rounded-lg border-cyan-500 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
      ></textarea>
    </div>

    <div className="mb-4">
      <label className="block mb-2 text-lg font-medium text-white">Price:</label>
      <input
        type="number"
        name="Price"
        step="0.01"
        value={formData.Price}
        onChange={handleChange}
        required
        className="w-full p-3 text-white bg-gray-800 border rounded-lg border-cyan-500 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 text-lg font-medium text-white">Image:</label>
      <input
        type="file"
        name="ImageUrl"
        onChange={handleFileChange}
        required
        className="w-full p-3 text-white bg-gray-800 border rounded-lg cursor-pointer border-cyan-500 file:bg-cyan-500 file:text-white file:border-none file:px-4 file:py-2 hover:file:bg-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 text-lg font-medium text-white">Category:</label>
      <select
        name="CategoryId"
        value={formData.CategoryId}
        onChange={handleChange}
        required
        className="w-full p-3 text-white bg-gray-800 border rounded-lg border-cyan-500 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
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
      className="w-full px-6 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-lg bg-fuchsia-500 hover:bg-cyan-400 hover:shadow-cyan-500 hover:scale-105 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
    >
      Add Product
    </button>
  </form>
</div>

  );
};

export default AddProduct;
