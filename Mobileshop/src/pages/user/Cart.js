import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Shopping Cart</h2>
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://via.placeholder.com/150" className="img-fluid rounded-start" alt="Product" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Product Name</h5>
                                    <p className="card-text">Product description goes here.</p>
                                    <p className="card-text"><small className="text-muted">$99.99</small></p>
                                    <button className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Order Summary</h5>
                            <p className="card-text">Items: 1</p>
                            <p className="card-text">Total: $99.99</p>
                            <button className="btn btn-primary btn-block">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;