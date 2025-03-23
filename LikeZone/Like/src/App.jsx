import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UserNavbar from "../src/components/UserNavbar";
import Footer from "../src/components/Footer";

const App = () => {
  return (
    <div>
      <UserNavbar />
      <main className="container">
        {/* Your Page Content Here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
