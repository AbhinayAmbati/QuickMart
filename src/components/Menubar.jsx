import airplane from "../assets/airpplane.webp";
import appliances from "../assets/appliances.webp";
import bikes from "../assets/bikes.webp";
import electronicsPNG from "../assets/electronicsPNG.webp";
import fashionPNG from "../assets/fashionPNG.webp";
import homeAndFurniture from "../assets/homeAndFurniture.webp";
import kilos from "../assets/kilos.webp";
import mobilePNG from "../assets/mobilePNG.webp";
import toysPNG from "../assets/toys.webp";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const menuItems = [
  { name: "Kilos", icon: kilos, path: "/kilos" },
  { name: "Mobiles", icon: mobilePNG, path: "/mobiles" },
  { name: "Fashions", icon: fashionPNG, path: "/fashions" },
  { name: "Electronics", icon: electronicsPNG, path: "/electronics" },
  { name: "Furniture", icon: homeAndFurniture, path: "/home-furniture" },
  { name: "Appliances", icon: appliances, path: "/appliances" },
  { name: "Airplane", icon: airplane, path: "/airplane" },
  { name: "Toys", icon: toysPNG, path: "/toys" },
  { name: "Bikes", icon: bikes, path: "/bikes" },
];

const Menubar = () => {
  return (
    <>
    <Navbar/>
    
    <div className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-6 text-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex flex-col items-center gap-2 group"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default Menubar;
