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

<Router basename="/user">
  <Routes>
    <Route path="/buy/iphone" element={<BuyIPhones />} />
    <Route path="/buy/samsung" element={<BuySamsung />} />
    <Route path="/buy/android" element={<Android />} />
    <Route path="/buy/ipad" element={<Ipad />} />
    <Route path="/buy/smartwatch" element={<SmartwatchShop />} />
    <Route path="/buy/macbook" element={<MacBookShop />} />
    <Route path="/buy/accessories" element={<BuyAccessories />} />
    <Route path="/buy/clearance" element={<ClearanceDeals />} />
    <Route path="/sell" element={<SellUsedPhones />} />
    <Route path="/sell-in-bulk" element={<DeviceRepairServices />} />
  </Routes>
</Router>



export default App;
