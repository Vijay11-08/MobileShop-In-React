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
        <div className="container">
            <h2>Admin - Manage Categories</h2>

            {/* Add Category */}
            <div>
                <input
                    type="text"
                    placeholder="New Category Name"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button onClick={handleAddCategory}>Add</button>
            </div>

            {/* Category List */}
            <ul>
                {categories.map((cat) => (
                    <li key={cat.id}>
                        {editCategory.id === cat.id ? (
                            <>
                                <input type="text" value={editCategory.name} onChange={handleEditChange} />
                                <button onClick={handleUpdateCategory}>Save</button>
                                <button onClick={() => setEditCategory({ id: null, name: "" })}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {cat.name}
                                <button onClick={() => setEditCategory(cat)}>Edit</button>
                                <button onClick={() => handleDeleteCategory(cat.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminCategories;
