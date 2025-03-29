import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
const Layout = ({ children }) => {
    return (
        <div>
        <Navbar />
        <div className='main-content'>
            {children}

        </div>
        <Footer />
        </div>
    );
}
export default Layout;