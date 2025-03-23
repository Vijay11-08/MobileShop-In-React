import React from 'react';

export const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-800 text-white w-64 h-screen p-5">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <ul className="mt-4">
        <li className="py-2 hover:bg-gray-700 px-2 rounded">Dashboard</li>
        <li className="py-2 hover:bg-gray-700 px-2 rounded">Users</li>
        <li className="py-2 hover:bg-gray-700 px-2 rounded">Orders</li>
        <li className="py-2 hover:bg-gray-700 px-2 rounded">Products</li>
      </ul>
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className="navbar bg-blue-600 text-white p-4 flex justify-between">
      <span className="text-lg font-bold">My App</span>
      <button className="bg-red-500 px-4 py-2 rounded">Logout</button>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-3 mt-4">
      &copy; 2025 My App. All rights reserved.
    </footer>
  );
};

export const Card = ({ title, value }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-gray-700 text-lg font-bold">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

export const Table = ({ data, columns }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((col, idx) => (
            <th key={idx} className="border p-2">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border">
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="border p-2">{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        {children}
        <button className="mt-3 bg-red-500 px-4 py-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export const Button = ({ label, onClick, className = "" }) => {
  return (
    <button className={`bg-blue-500 px-4 py-2 text-white rounded ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};
