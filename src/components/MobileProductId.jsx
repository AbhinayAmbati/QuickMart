import { useParams } from "react-router-dom";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";
import mobiles from "../data/mobile";
import Navbar from "./Navbar";

const MobileProductId = () => {
  const { id } = useParams();
  const mobile = mobiles.find((m) => m.id === parseInt(id));

  if (!mobile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-3xl text-red-500 mb-4">😕</div>
        <div className="text-2xl font-semibold text-gray-800">
          Product Not Found
        </div>
        <p className="text-gray-600 mt-2">
          The mobile youre looking for doesnt exist.
        </p>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <div className="relative">
                <img
                  src={mobile.image}
                  alt={mobile.name}
                  className="w-full h-[500px] object-cover rounded-xl"
                />
                {mobile.isNew && (
                  <span className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    New Launch
                  </span>
                )}
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Available Colors</h3>
                <div className="flex gap-3">
                  {mobile.colors.map((color) => (
                    <button
                      key={color}
                      className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {mobile.name}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{mobile.brand}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">{mobile.rating}</span>
                  </div>
                  <span className="text-gray-500">
                    ({mobile.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="border-t border-b py-4">
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  ${mobile.price.toFixed(2)}
                </div>
                <p className="text-gray-600">{mobile.description}</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Storage</h3>
                <div className="flex gap-3">
                  {mobile.specs.storage.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(mobile.specs)
                    .slice(0, 6)
                    .map(
                      ([key, value]) =>
                        key !== "storage" && (
                          <div key={key} className="flex items-start space-x-2">
                            <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                            <div>
                              <p className="font-medium capitalize">{key}</p>
                              <p className="text-sm text-gray-600">
                                {Array.isArray(value)
                                  ? value.join(", ")
                                  : typeof value === "object"
                                  ? JSON.stringify(value)
                                  : value}
                              </p>
                            </div>
                          </div>
                        )
                    )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-colors">
                    <Heart className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                  <Truck className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-600">Free Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-600">1 Year Warranty</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-600">7 Day Return</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default MobileProductId;
