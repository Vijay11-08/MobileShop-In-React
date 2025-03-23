import { Routes, Route } from "react-router-dom";
import Orders from "../pages/admin/Orders";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/orders" element={<Orders />} />
    </Routes>
  );
};

export default AdminRoutes;
