import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserNavbar from "./components/UserNavbar";
// import iPhone from "./pages/user/buy/iPhone";
import Samsung from "./pages/user/buy/Samsung";
import Android from "./pages/user/buy/Android";
// import iPad from "./pages/user/buy/iPad";
import Smartwatch from "./pages/user/buy/Smartwatch";
import MacBook from "./pages/user/buy/MacBook";
import Accessories from "./pages/user/buy/Accessories";
import Clearance from "./pages/user/buy/Clearance";
import SellPage from "./pages/user/SellPage";
import SellInBulk from "./pages/user/SellInBulk";

const App = () => {
  return (
    <Router>
      <UserNavbar />
      <Routes>
        <Route path="/user/buy/iphone" element={<iPhone />} />
        <Route path="/user/buy/samsung" element={<Samsung />} />
        <Route path="/user/buy/android" element={<Android />} />
        <Route path="/user/buy/ipad" element={<iPad />} />
        <Route path="/user/buy/smartwatch" element={<Smartwatch />} />
        <Route path="/user/buy/macbook" element={<MacBook />} />
        <Route path="/user/buy/accessories" element={<Accessories />} />
        <Route path="/user/buy/clearance" element={<Clearance />} />
        <Route path="/user/sell" element={<SellPage />} />
        <Route path="/user/sell-in-bulk" element={<SellInBulk />} />
      </Routes>
    </Router>
  );
};

export default App;
