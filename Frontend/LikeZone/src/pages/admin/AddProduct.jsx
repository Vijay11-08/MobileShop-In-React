import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        category_id: "",
    });

    const [image, setImage] = useState(null);
    const [message, setMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Handle image upload
    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Store the file
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Create FormData to send file + product details
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("stock", product.stock);
        formData.append("category_id", product.category_id);
        formData.append("image", image); // Attach the file

        try {
            const response = await axios.post("http://localhost:5000/api/products", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            setMessage("Product added successfully!");
            setProduct({
                name: "",
                description: "",
                price: "",
                stock: "",
                category_id: "",
            });
            setImage(null);
        } catch (error) {
            setMessage("Error adding product. Please try again.");
        }
    };

    return (
        <div className="add-product-container">
            <h2>Add New Product</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>Product Name:</label>
                <input type="text" name="name" value={product.name} onChange={handleChange} required />

                <label>Description:</label>
                <textarea name="description" value={product.description} onChange={handleChange} required />

                <label>Price:</label>
                <input type="number" name="price" value={product.price} onChange={handleChange} required />

                <label>Stock:</label>
                <input type="number" name="stock" value={product.stock} onChange={handleChange} required />

                <label>Category ID:</label>
                <input type="number" name="category_id" value={product.category_id} onChange={handleChange} required />

                <label>Upload Image:</label>
                <input type="file" accept="image/*" onChange={handleImageChange} required />

                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
