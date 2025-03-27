import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header>
      <h1>Admin Panel</h1>
      <nav>
        <Link to='/admin'>Dashboard</Link> |
        <Link to='/admin-panel'>Manage</Link> |
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default AdminHeader;
