import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-gray-600 font-medium text-md px-5">
            {/* Home */}
            <li className="hover:text-gray-900 transition-colors">
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li className="hover:text-gray-900 transition-colors">
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {/* <li className="hover:text-gray-900 transition-colors">
                <Link to={'/signup'}>Signup</Link>
            </li> */}

          

            {/* Cart */}
            <li className="hover:text-gray-900 transition-colors">
                <Link to={'/cart'}>
                    Cart(0)
                </Link>
            </li>
            {/* <li>
                <Link to={'/admindashboard'}>Admin</Link>
            </li> */}
           
              {/* User */}
              <li className="hover:text-gray-900 transition-colors">
                <Link to={'/userdashboard'}>Userl</Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-white shadow-md sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-start items-center py-3 lg:px-3">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className="font-bold text-gray-700 text-2xl text-center">LikeZone</h2>
                    </Link>
                </div>

                {/* right - Nav List aligned left */}
                <div className="right flex-grow flex justify-start">
                    {navList}
                </div>

                {/* Search Bar */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
