// Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <nav className="bg-black bg-opacity-55 shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%]  z-50 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="./logo.png"
              alt="Logo"
              className="h-10 w-auto rounded-full"
            />
            <span className="ml-2 text-white text-xl font-mono">
              JOLI COSMETICS
            </span>
          </div>

          {/* Links - desktop */}
          <div className="hidden md:flex items-center space-x-6 text-right">
            <Link
          
              to="/"
              className="text-white hover:text-pink-500 font-mono"
            >
              الرئيسية
            </Link>
            <Link
             
              to="/about"
              className="text-white hover:text-pink-500 font-mono"
            >
              من نحن؟
            </Link>
            <Link
            
              to="/products"
              className="text-white hover:text-pink-500 font-mono"
            >
              المنتجات
            </Link>
            <Link
              to="/cart"
              className="text-white hover:text-pink-500 font-medium"
            >
              <LuShoppingCart className="text-2xl" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block py-2 text-white hover:text-pink-500"
            onClick={() => setIsOpen(false)}
          >
            الرئيسية
          </Link>
          <Link
            to="/about"
            className="block py-2 text-white hover:text-pink-500"
            onClick={() => setIsOpen(false)}
          >
            من نحن؟
          </Link>
          <Link
            to="/products"
            className="block py-2 text-white hover:text-pink-500"
            onClick={() => setIsOpen(false)}
          >
            المنتجات
          </Link>
          <Link
            to="/cart"
            className="text-white hover:text-pink-500 font-mono flex items-center"
          >
            <LuShoppingCart className="my-2 mr-3 font-mono"  size={20} />
            عربة التسوق
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
