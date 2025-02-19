import { Link } from "react-router-dom";

const Navbar = () => {
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
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;