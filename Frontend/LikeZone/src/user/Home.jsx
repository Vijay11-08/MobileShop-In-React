import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-3">Find Your Perfect Mobile</h1>
        <p className="text-lg">Discover the best deals on top smartphones</p>
        <Link to="/shop" className="mt-4 inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg">
          Shop Now
        </Link>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["Android", "iPhone", "Budget", "Flagship"].map((category, index) => (
            <Link
              key={index}
              to={`/shop?category=${category.toLowerCase()}`}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Trending Smartphones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "iPhone 15 Pro", price: "$999", img: "https://via.placeholder.com/150" },
            { name: "Samsung S23 Ultra", price: "$1199", img: "https://via.placeholder.com/150" },
            { name: "Google Pixel 8", price: "$699", img: "https://via.placeholder.com/150" },
          ].map((phone, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={phone.img} alt={phone.name} className="w-full rounded-lg mb-3" />
              <h3 className="text-lg font-semibold">{phone.name}</h3>
              <p className="text-gray-600">{phone.price}</p>
              <Link to="/shop" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-white py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Customer Reviews</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "John Doe", review: "Great experience! The best phone deals." },
            { name: "Sarah Lee", review: "Fast shipping and excellent customer support!" },
          ].map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-gray-600">"{review.review}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        <p>© 2025 Mobile Store. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/" className="hover:underline">Privacy Policy</Link>
          <Link to="/" className="hover:underline">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
