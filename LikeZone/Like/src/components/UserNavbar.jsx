import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BuySamsung from "../pages/user/buy/Samsung";
import BuyIPhones from "../pages/user/buy/iPhone";
import Android from "../pages/user/buy/Android";
import Ipad from "../pages/user/buy/iPad";
import SmartwatchShop from "../pages/user/buy/Smartwatch";
import MacBookShop from "../pages/user/buy/MacBook";
import BuyAccessories from "../pages/user/buy/Accessories";
import ClearanceDeals from "../pages/user/buy/Clearance";
import SellUsedPhones from "../pages/user/SellPage";
import DeviceRepairServices from "../pages/user/SellInBulk";
import UserNavbar from "../components/UserNavbar";

const App = () => {
  return (
    <Router>
      <UserNavbar />
      <Routes>
        <Route path="/user/buy/iphone" element={<BuyIPhones />} />
        <Route path="/user/buy/samsung" element={<BuySamsung />} />
        <Route path="/user/buy/android" element={<Android />} />
        <Route path="/user/buy/ipad" element={<Ipad />} />
        <Route path="/user/buy/smartwatch" element={<SmartwatchShop />} />
        <Route path="/user/buy/macbook" element={<MacBookShop />} />
        <Route path="/user/buy/accessories" element={<BuyAccessories />} />
        <Route path="/user/buy/clearance" element={<ClearanceDeals />} />
        <Route path="/user/sell" element={<SellUsedPhones />} />
        <Route path="/user/sell-in-bulk" element={<DeviceRepairServices />} />
      </Routes>
    </Router>
  );
};

export default App;
