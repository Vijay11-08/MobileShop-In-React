import React from "react";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";
import "../styles/user.css";

const UserLayout = ({ children }) => {
  return (
    <div className="user-container">
      <UserHeader />
      <main className="user-content">{children}</main>
      <UserFooter />
    </div>
  );
};
export default UserLayout;