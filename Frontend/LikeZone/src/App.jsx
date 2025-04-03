import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


import UserHeader from "./components/UserHeader"; // Import Header
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import BuyPage from "./pages/user/buy/BuyPage";
import SellPage from "./pages/user/sell/SellPage";


import SellUsedPhones from "./pages/user/Other/SellUsedPhones";
import HowItWorks from "./pages/user/Other/HowItWorks";
import AboutUs from "./pages/user/Other/AboutUs";
import ContactUs from "./pages/user/Other/ContactUs";
import FAQs from "./pages/user/Other/FAQs";

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


import Register from "./pages/user/Register"; // Import Register component
import ResetPassword from "./pages/user/ResetPassword";
import ForgotPassword from "./pages/user/ForgotPassword";
import AddProduct from "./pages/admin/AddProduct";

import AdminOrderItems from "./pages/admin/AdminOrderItems";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminPayments from "./pages/admin/AdminPayments";
import Footer from "./components/Footer";
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


        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />


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
        <Route path="/admin/addproduct" element={<AddProduct />} />
        <Route path="/admin/addpayments" element={<AdminPayments />} />
        <Route path="/admin/addorder" element={<AdminOrders />} />
        <Route path="/admin/addorderitem" element={<AdminOrderItems />} />


        <Route path="/Other/faqs" element={<FAQs />} />
        <Route path="/Other/aboutus" element={<AboutUs />} />
        <Route path="/Other/contactus" element={<ContactUs />} />
        <Route path="/Other/howitworks" element={<HowItWorks />} />
        <Route path="/Other/sellpages" element={<SellUsedPhones />} />

      </Routes>
      
    <Footer/>
    </Router>
  );
}

export default App;
