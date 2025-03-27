import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserProductList from "./pages/user/UserProductList";
import ProductDetails from "./pages/user/ProductDetails";
import UserHeader from "./components/UserHeader";
import Checkout from "./pages/Checkout";
import UserDashboard from "./pages/UserDashboard";
import Login from "./pages/Login";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <UserHeader />
              <Routes>
                <Route path="/" element={<UserProductList />} />
                <Route path="/products" element={<UserProductList />} /> {/* Product List Page */}
                <Route path="/product/:id" element={<ProductDetails />} /> {/* Product Details Page */}
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/user" element={<UserDashboard />} />
              </Routes>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
