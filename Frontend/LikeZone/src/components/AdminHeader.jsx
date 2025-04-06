import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <aside className="fixed flex flex-col w-64 h-screen text-white bg-gray-900 shadow-lg">
      <h1 className="py-4 text-xl font-bold text-center text-cyan-400 shadow-cyan-500">Admin Panel</h1>
      <nav className="mt-4">
        <ul className="px-4 space-y-2">
          <li><Link className="block px-4 py-2 bg-gray-800 rounded hover:bg-cyan-400 hover:text-black" to="/admin/dashboard">Dashboard</Link></li>
          <li><Link className="block px-4 py-2 bg-gray-800 rounded hover:bg-cyan-400 hover:text-black" to="/admin/users">Manage Users</Link></li>
          <li><Link className="block px-4 py-2 bg-gray-800 rounded hover:bg-cyan-400 hover:text-black" to="/admin/products">Manage Products</Link></li>
          <li><Link className="block px-4 py-2 bg-gray-800 rounded hover:bg-cyan-400 hover:text-black" to="/admin/orders">Manage Orders</Link></li>
          <li><Link className="block px-4 py-2 bg-gray-800 rounded hover:bg-cyan-400 hover:text-black" to="/admin/orderdetails">Manage Order Details</Link></li>
          <li><Link className="block px-4 py-2 bg-gray-800 rounded hover:bg-cyan-400 hover:text-black" to="/admin/payments">Manage Payments</Link></li>
          <li><Link className="block px-4 py-2 bg-gray-800 rounded hover:bg-cyan-400 hover:text-black" to="/admin/cart">View Cart</Link></li>
          <li><Link className="block px-4 py-2 bg-gray-800 rounded hover:bg-cyan-400 hover:text-black" to="/admin/categories">Add Categories</Link></li>
          <li><Link className="block px-4 py-2 bg-gray-800 rounded hover:bg-cyan-400 hover:text-black" to="/admin/add-product">Add Product</Link></li>
          <li><Link className="block px-4 py-2 bg-gray-800 rounded hover:bg-cyan-400 hover:text-black" to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <AdminHeader />
      <main className="w-full min-h-screen p-6 ml-64 text-white bg-gray-800">
        {children}
        <footer className="mt-4 text-center text-cyan-400">&copy; 2025 Mobile Shop - Admin Panel</footer>
      </main>
    </div>
  );
};

export { AdminHeader, AdminLayout };
