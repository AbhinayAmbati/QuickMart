import { useState } from 'react';
import { Search, Star, ShoppingCart } from 'lucide-react';
import mobiles from '../data/mobile';
import { Link } from 'react-router-dom';
import Menubar from "./Menubar"

const MobileProducts = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [priceRange, setPriceRange] = useState('All');

    const brands = ['All', ...new Set(mobiles.map(mobile => mobile.brand))];

    const filteredProducts = mobiles.filter(mobile => {
        const matchesSearch = mobile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            mobile.brand.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesBrand = selectedBrand === 'All' || mobile.brand === selectedBrand;
        const matchesPrice = priceRange === 'All' || 
                           (priceRange === '0-500' && mobile.price <= 500) ||
                           (priceRange === '501-1000' && mobile.price > 500 && mobile.price <= 1000) ||
                           (priceRange === '1000+' && mobile.price > 1000);
        
        return matchesSearch && matchesBrand && matchesPrice;
    });

    return (
    <>
    <Menubar /><div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Mobile Phones</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search phones..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>

                    <div>
                        <select
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                        >
                            {brands.map(brand => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <select
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                        >
                            <option value="All">All Prices</option>
                            <option value="0-500">$0 - $500</option>
                            <option value="501-1000">$501 - $1000</option>
                            <option value="1000+">$1000+</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(mobile => (
                        <Link to={`/mobiles/${mobile.id}`}
                            key={mobile.id}
                        >
                            <div
                                key={mobile.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative">
                                    <img
                                        src={mobile.image}
                                        alt={mobile.name}
                                        className="w-full h-64 object-cover" />
                                    {mobile.isNew && (
                                        <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            New
                                        </span>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 mb-1">{mobile.name}</h2>
                                            <p className="text-gray-600">{mobile.brand}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                                            <span className="ml-1 text-gray-600">{mobile.rating}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <p className="text-sm text-gray-600">
                                            {mobile.specs.display}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {mobile.specs.processor}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {mobile.specs.ram} RAM
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center mt-4">
                                        <p className="text-2xl font-bold text-blue-600">
                                            ${mobile.price}
                                        </p>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200">
                                            <ShoppingCart className="h-5 w-5" />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div> </Link>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No products found matching your criteria</p>
                    </div>
                )}
            </div>
        </div></>
    );
};

export default MobileProducts;