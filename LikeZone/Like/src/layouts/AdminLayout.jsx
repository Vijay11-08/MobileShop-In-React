import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/admin.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container">
      <AdminHeader />
      <div className="admin-body">
        <AdminSidebar />
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
};
export default AdminLayout;