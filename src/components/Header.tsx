import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { MenuIcon, XIcon, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { cart, user } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-lime-500">Limefy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-lime-500 transition-colors font-medium">
            Home
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-lime-500 transition-colors font-medium">
            Services
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-lime-500 transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-lime-500 transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative text-gray-800 hover:text-lime-500 transition-colors">
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-lime-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
          <Link to="/auth" className="text-gray-800 hover:text-lime-500 transition-colors">
            <User size={20} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute w-full">
          <nav className="flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-lime-500 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-gray-800 hover:text-lime-500 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-lime-500 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-lime-500 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-6 py-2">
              <Link 
                to="/cart" 
                className="relative text-gray-800 hover:text-lime-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart size={20} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-lime-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link 
                to="/auth" 
                className="text-gray-800 hover:text-lime-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;