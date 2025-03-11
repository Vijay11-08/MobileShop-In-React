import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://via.placeholder.com/500" className="img-fluid" alt="Product" />
                </div>
                <div className="col-md-6">
                    <h1>Product Name</h1>
                    <p className="text-muted">Category: Electronics</p>
                    <h2>$499.99</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    <button className="btn btn-primary btn-lg">Add to Cart</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <h3>Product Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;