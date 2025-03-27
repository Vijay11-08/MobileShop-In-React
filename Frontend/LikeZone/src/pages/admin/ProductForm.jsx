import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    image_url: ""
  });

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:5000/api/products/${id}`, product);
      } else {
        await axios.post("http://localhost:5000/api/products", product);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div>
      <h3>{id ? "Edit Product" : "Add Product"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required className="form-control mb-2" />
        <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} required className="form-control mb-2"></textarea>
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required className="form-control mb-2" />
        <input type="number" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required className="form-control mb-2" />
        <input type="text" name="category_id" placeholder="Category ID" value={product.category_id} onChange={handleChange} required className="form-control mb-2" />
        <input type="text" name="image_url" placeholder="Image URL" value={product.image_url} onChange={handleChange} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">{id ? "Update" : "Add"} Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
