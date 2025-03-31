import { Button } from '@material-tailwind/react'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import HomePage from './pages/home/HomePage';
import NoPage from './pages/noPage/NoPage';
import ProductInfo from './pages/productInfo/ProductInfo';
import ScrollTop from './components/scrollTop/ScrollTop';
import CartPage from './pages/cart/CartPage';
import AllProduct from './pages/allProduct/AllProduct';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddProductPage from './pages/admin/AddProductPage';
import UpdateProductPage from './pages/admin/UpdateProductPage';



export default function App() {
  return (
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="*" element={<NoPage/>} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/updateproduct" element={<UpdateProductPage />} />

                     
          


        </Routes>
      </Router>
    </div>
  )
}
