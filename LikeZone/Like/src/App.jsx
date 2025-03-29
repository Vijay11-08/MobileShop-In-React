import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "../src/components/Footer";
import UserRoutes from "./routes/UserRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div>
      <Router>
        <UserRoutes/>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
