import { Link } from "react-router-dom";
import { UserCircle, ShoppingCart, Search, Bell, LogOut, Settings, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/signin");
  };

  return (
    <div className="relative">
      <div className="bg-[#0046BE] text-white shadow-lg">
        
        
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between p-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text hover:from-[#FFC72C] hover:to-[#FFA500] transition-all duration-300">
                QuickMart
              </div>
            </Link>

            <form className="flex flex-grow justify-center mx-8 max-w-2xl">
              <div className="relative w-full">
                <input 
                  type="text"
                  placeholder="Search products, brands and more..."
                  className="w-full pl-4 pr-10 py-2.5 rounded-l-lg text-gray-800 placeholder-gray-500 bg-white border-2 border-r-0 border-transparent focus:border-[#FFC72C] focus:outline-none transition-all duration-200"
                />
                <button className="absolute right-0 top-0 h-full flex items-center justify-center px-4 text-gray-500 hover:text-gray-700">
                  <Search className="w-5 h-5" />
                </button>
              </div>
              <button className="bg-[#FFC72C] text-gray-900 px-6 rounded-r-lg font-medium hover:bg-[#FFD700] transition-colors duration-200">
                Search
              </button>
            </form>

            <div className="flex items-center space-x-6">
              <button className="relative p-2 hover:bg-blue-700 rounded-full transition-colors duration-200">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  4
                </span>
              </button>
              
              <Link 
                to="/cart" 
                className="relative flex items-center space-x-2 p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="hidden md:inline">Cart</span>
                <span className="absolute -top-1 -right-1 bg-[#FFC72C] text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                >
                  <UserCircle className="w-6 h-6" />
                  <span className="hidden md:inline font-medium">Abhinay</span>
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">Abhinay</p>
                      <p className="text-gray-500 text-xs">abhinay@gmail.com</p>
                    </div>
                    
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                    
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;