import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!product) {
    return <p className="text-center mt-4">Loading product details...</p>;
  }

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <img src={product.image_url} className="card-img-top" alt={product.name} style={{ height: "300px", objectFit: "cover" }} />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text"><strong>Description:</strong> {product.description}</p>
          <p className="card-text"><strong>Price:</strong> ${product.price}</p>
          <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
