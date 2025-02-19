import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import { useLenis } from './hooks/lenis';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {MotionConfig} from 'framer-motion';
import MobileProducts from './components/MobileProducts';
import MobileProductId from './components/MobileProductId';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const [loading, setLoading] = useState(false);

  useLenis();
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 14500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <ToastContainer />
      <MotionConfig reducedMotion='use-reduced-motion'>
        <div>
          {
            loading ? (
              <div className=""></div>
            ) : (
              <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/mobiles" element={<MobileProducts/>}/>
                <Route path="/mobiles/:id" element={<MobileProductId/>}/>
              </Routes>
            )
          }
          </div>
          </MotionConfig>
    </div>
    
  );
};

export default App;