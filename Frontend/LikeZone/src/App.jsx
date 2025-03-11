import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./user/Navbar";
import Home from "./user/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<h1>Shop Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
