import React from "react";

const Home = () => {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="text-center bg-primary text-white p-5 rounded">
        <h1>Welcome to MobileShop</h1>
        <p>Find the best mobile phones at the best prices</p>
        <button className="btn btn-light mt-2">Shop Now</button>
      </div>

      {/* Featured Products */}
      <div className="mt-4">
        <h2 className="text-center">Featured Phones</h2>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Phone 1" />
              <div className="card-body text-center">
                <p className="card-text">iPhone 14 - $999</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Phone 2" />
              <div className="card-body text-center">
                <p className="card-text">Samsung S23 - $899</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Phone 3" />
              <div className="card-body text-center">
                <p className="card-text">OnePlus 11 - $749</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
