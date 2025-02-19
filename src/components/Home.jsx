import { Link } from "react-router-dom";
import Menubar from "./Menubar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "../data/products";
import slide from "../assets/slide.webp";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [slide, slide1, slide2, slide3, slide4];

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <Menubar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <Slider {...settings} className="w-full">
          {images.map((src, index) => (
            <div key={index} className=" flex items-center justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="h-20 w-full object-cover"
              />
            </div>
          ))}
        </Slider>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden flex flex-col h-full border border-gray-100">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-[#0046BE] group-hover:text-[#003399] transition-colors duration-200 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-[#D80032] font-bold text-xl">
                      ${product.price}
                    </p>
                    <span className="text-sm text-gray-500 group-hover:text-[#0046BE] transition-colors duration-200">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default Home;