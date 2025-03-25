import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './pages/user/navbar';
import Profile from "./pages/user/Profile";
const App = () => {
  return (
    <div>
      <Navbar /> {/* Use Navbar instead of UserNavbar */}
      <main className="container">
        {/* Your Page Content Here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
