const Navbar = ({ title }) => {
    return (
      <nav className="flex justify-between items-center p-4 ">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="bg-[#1e1e2e] text-white px-3 py-1 rounded-xl">
          Logout
        </button>
      </nav>
    );
  };
  
  export default Navbar;
  