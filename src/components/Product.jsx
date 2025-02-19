import { useState } from 'react';
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart, Share2, Star, ChevronLeft, Truck, Shield, RotateCcw } from "lucide-react";
import products from "../data/products";
import Navbar from './Navbar'

const Product = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const [isImageHovered, setIsImageHovered] = useState(false);

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                <div className="text-6xl mb-6">😕</div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
                <p className="text-gray-600 mb-8">The product youre looking for doesnt exist.</p>
                <button 
                    onClick={() => window.history.back()}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200"
                >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Go Back</span>
                </button>
            </div>
        );
    }

    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        {/* Image Section */}
                        <div className="relative">
                            <div 
                                className="relative rounded-2xl overflow-hidden group"
                                onMouseEnter={() => setIsImageHovered(true)}
                                onMouseLeave={() => setIsImageHovered(false)}
                            >
                                <img 
                                    className={`w-full h-[600px] object-cover transform transition-transform duration-700 ${
                                        isImageHovered ? 'scale-110' : 'scale-100'
                                    }`}
                                    src={product.image} 
                                    alt={product.name} 
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                
                                {/* Floating Buttons */}
                                <div className="absolute top-4 right-4 space-y-3">
                                    <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-110">
                                        <Share2 className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-110">
                                        <Heart className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>

                                {/* New Arrival Badge */}
                                {product.isNew && (
                                    <div className="absolute top-4 left-4 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        New Arrival
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                            {/* Product Title and Rating */}
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold text-gray-900 leading-tight">{product.name}</h1>
                                <div className="flex items-center space-x-4">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-gray-500 font-medium">(120 reviews)</span>
                                </div>
                            </div>

                            {/* Price and Description */}
                            <div className="space-y-4">
                                <div className="flex items-baseline space-x-3">
                                    <p className="text-4xl font-bold text-blue-600">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    {product.oldPrice && (
                                        <p className="text-xl text-gray-400 line-through">
                                            ${product.oldPrice.toFixed(2)}
                                        </p>
                                    )}
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {product.description}
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center space-x-3">
                                    <Truck className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-600">Free Shipping</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-600">2 Year Warranty</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <RotateCcw className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-600">30-Day Returns</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-600">In Stock</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4 pt-4">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition duration-200 flex items-center justify-center space-x-3 transform hover:scale-105">
                                    <ShoppingCart className="w-6 h-6" />
                                    <span className="text-lg">Add to Cart</span>
                                </button>
                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-4 rounded-xl transition duration-200 flex items-center justify-center space-x-3 transform hover:scale-105">
                                    <Heart className="w-6 h-6" />
                                    <span className="text-lg">Add to Wishlist</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Product;