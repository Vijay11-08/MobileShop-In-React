import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
return (
    <div className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-primary text-white text-center py-12 px-4">
            <h1 className="display-4 font-weight-bold mb-3">Find Your Perfect Mobile</h1>
            <p className="lead">Discover the best deals on top smartphones</p>
            <Link to="/shop" className="mt-4 btn btn-light text-primary font-weight-semibold px-6 py-2 rounded-lg">
                Shop Now
            </Link>
        </section>

        {/* Categories Section */}
        <section className="container py-10">
            <h2 className="h2 font-weight-semibold text-center mb-6">Browse by Category</h2>
            <div className="row text-center">
                {["Android", "iPhone", "Budget", "Flagship"].map((category, index) => (
                    <div key={index} className="col-6 col-md-3 mb-4">
                        <Link
                            to={`/shop?category=${category.toLowerCase()}`}
                            className="bg-white p-4 rounded-lg shadow hover-shadow-lg transition d-block"
                        >
                            {category}
                        </Link>
                    </div>
                ))}
            </div>
        </section>

        {/* Featured Products */}
        <section className="container py-10">
            <h2 className="h2 font-weight-semibold text-center mb-6">Trending Smartphones</h2>
            <div className="row">
                {[
                    { name: "iPhone 15 Pro", price: "$999", img: "https://via.placeholder.com/150" },
                    { name: "Samsung S23 Ultra", price: "$1199", img: "https://via.placeholder.com/150" },
                    { name: "Google Pixel 8", price: "$699", img: "https://via.placeholder.com/150" },
                ].map((phone, index) => (
                    <div key={index} className="col-12 col-md-4 mb-4">
                        <div className="bg-white p-4 rounded-lg shadow hover-shadow-lg transition">
                            <img src={phone.img} alt={phone.name} className="w-100 rounded-lg mb-3" />
                            <h3 className="h5 font-weight-semibold">{phone.name}</h3>
                            <p className="text-muted">{phone.price}</p>
                            <Link to="/shop" className="mt-2 btn btn-primary text-white px-4 py-2 rounded-lg">
                                Buy Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Customer Reviews */}
        <section className="bg-white py-10">
            <h2 className="h2 font-weight-semibold text-center mb-6">Customer Reviews</h2>
            <div className="container row">
                {[
                    { name: "John Doe", review: "Great experience! The best phone deals." },
                    { name: "Sarah Lee", review: "Fast shipping and excellent customer support!" },
                ].map((review, index) => (
                    <div key={index} className="col-12 col-md-6 mb-4">
                        <div className="bg-light p-4 rounded-lg shadow">
                            <h3 className="font-weight-semibold">{review.name}</h3>
                            <p className="text-muted">"{review.review}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Footer */}
        
    </div>
);
};

export default Home;
