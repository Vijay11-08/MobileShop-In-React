import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/home";
import Shop from "../pages/user/Shop";
import Cart from "../pages/user/Cart";
import Profile from "../pages/user/Profile";
import SellInBulk from "../pages/user/SellInBulk";
import SellPage from "../pages/user/SellPage";
import Register from "../pages/user/register";
import AboutUs from "../pages/user/Aboutus";
import ContactUs from "../pages/user/ContactUs";
import FAQS from "../pages/user/FAQS";
import HowItWorks from "../pages/user/HowItWorks";


const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/SellInBulk" element={<SellInBulk />} />
        <Route path="/SellPage" element={<SellPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/howitworks" element={<HowItWorks />} />


      </Routes>
    </UserLayout>
  );
};
export default UserRoutes;