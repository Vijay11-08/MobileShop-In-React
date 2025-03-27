import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserHeader from "./components/UserHeader"; // Import Header
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import BuyPage from "./pages/user/buy/BuyPage";
import SellPage from "./pages/user/sell/SellPage";


import BuyAndroid from "./pages/user/buy/BuyAndroid"; // Import BuyAndroid component
import BuyIphone from "./pages/user/buy/BuyIphone"; // Import BuyIphone component
import BuySamsung from "./pages/user/buy/BuySamsung"; // Import BuySamsung component
import BuyAccessories from "./pages/user/buy/BuyAccessories"; // Import the component
import BuySmartwatch from "./pages/user/buy/BuySmartwatch"; // Import the component
import BuyIpad from "./pages/user/buy/BuyIpad"; // Import the component
import BuyMacbook from "./pages/user/buy/BuyMacbook"; // Import the component


import SelliPhone from "./pages/user/sell/SelliPhone"; // Import the component
import SellSamsung from "./pages/user/sell/SellSamsung"; // Import the component
import SelliPad from "./pages/user/sell/SelliPad"; // Import the component
import SellSmartwatch from "./pages/user/sell/SellSmartwatch"; // Import the component
import SellAndroidPhone from "./pages/user/sell/SellAndroidPhone"; // Import the component
import SellAccessories from "./pages/user/sell/SellAccessories"; 


import AdminCategories from "./pages/admin/AdminCategories"; // Import component
import AdminUsers from "./pages/admin/AdminUsers"; // Import component
import AdminProducts from "./pages/admin/AdminProducts";


function App() {
  return (
    <Router>
      <UserHeader /> {/* Show the header on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />

        <Route path="/buy/android" element={<BuyAndroid />} />
        <Route path="/buy/iphone" element={<BuyIphone />} />
        <Route path="/buy/samsung" element={<BuySamsung />} />
        <Route path="/buy/accessories" element={<BuyAccessories />} />
        <Route path="/buy/smartwatch" element={<BuySmartwatch />} />
        <Route path="/buy/ipad" element={<BuyIpad />} />
        <Route path="/buy/macbook" element={<BuyMacbook />} />


        <Route path="/sell/iphone" element={<SelliPhone />} />
        <Route path="/sell/samsung" element={<SellSamsung />} />
        <Route path="/sell/ipad" element={<SelliPad />} />
        <Route path="/sell/smartwatch" element={<SellSmartwatch />} />
        <Route path="/sell/android" element={<SellAndroidPhone />} />
        <Route path="/sell/accessories" element={<SellAccessories />} />


        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/products" element={<AdminProducts />} />


      </Routes>
    </Router>
  );
}

export default App;
