import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/Home";
import Shop from "../pages/user/Shop";
import Cart from "../pages/user/Cart";
import Profile from "../pages/user/Profile";

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </UserLayout>
  );
};
export default UserRoutes;