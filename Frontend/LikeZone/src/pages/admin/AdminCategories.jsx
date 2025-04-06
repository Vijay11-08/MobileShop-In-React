import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editCategory, setEditCategory] = useState({ id: null, name: "" });

  // Fetch all categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    } catch (err) {
      toast.error("Failed to load categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Add new category
  const handleAddCategory = async () => {
    if (!newCategory.trim()) return toast.error("Category name is required");

    try {
      const res = await axios.post("http://localhost:5000/api/categories", { name: newCategory });
      setCategories([...categories, res.data]);
      setNewCategory("");
      toast.success("Category added successfully");
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to add category");
    }
  };

  // Handle edit input change
  const handleEditChange = (e) => {
    setEditCategory({ ...editCategory, name: e.target.value });
  };

  // Update category
  const handleUpdateCategory = async () => {
    if (!editCategory.name.trim()) return toast.error("Category name cannot be empty");

    try {
      const res = await axios.put(`http://localhost:5000/api/categories/${editCategory.id}`, {
        name: editCategory.name,
      });
      setCategories(categories.map((cat) => (cat.id === editCategory.id ? res.data : cat)));
      setEditCategory({ id: null, name: "" });
      toast.success("Category updated successfully");
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to update category");
    }
  };

  // Delete category
  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`);
      setCategories(categories.filter((cat) => cat.id !== id));
      toast.success("Category deleted successfully");
    } catch (err) {
      toast.error("Failed to delete category");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-orange-100">
      <h2 className="mb-6 text-3xl font-bold text-orange-700">Admin - Manage Categories</h2>

      {/* Add Category Form */}
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="New Category Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full px-4 py-2 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={handleAddCategory}
            className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            Add
          </button>
        </div>
      </div>

      {/* Category List */}
      <ul className="w-full max-w-lg p-6 mt-6 bg-white rounded-lg shadow-md">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="flex items-center justify-between p-3 border-b last:border-none"
          >
            {editCategory.id === cat.id ? (
              <div className="flex w-full space-x-2">
                <input
                  type="text"
                  value={editCategory.name}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-orange-400 rounded-lg"
                />
                <button
                  onClick={handleUpdateCategory}
                  className="px-3 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditCategory({ id: null, name: "" })}
                  className="px-3 py-2 text-white bg-gray-400 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-between w-full">
                <span className="text-orange-700">{cat.name}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => setEditCategory(cat)}
                    className="px-3 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(cat.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCategories;
