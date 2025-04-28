import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-lime-500 mb-4">Limefy</h3>
            <p className="text-gray-300 mb-4">
              Transforming your digital presence with professional services tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lime-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lime-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/tech_game_fusion69/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-lime-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#website" className="text-gray-300 hover:text-lime-500 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services#video" className="text-gray-300 hover:text-lime-500 transition-colors">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link to="/services#photo" className="text-gray-300 hover:text-lime-500 transition-colors">
                  Photo Editing
                </Link>
              </li>
              <li>
                <Link to="/services#social" className="text-gray-300 hover:text-lime-500 transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services#advertising" className="text-gray-300 hover:text-lime-500 transition-colors">
                  Advertising
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-lime-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-lime-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-lime-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-gray-300 hover:text-lime-500 transition-colors">
                  Sign In / Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-lime-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">MANTRI ALPYNE Dr.Vishnuvardhan Road Banashankari, 5th Stage, Subramanyapura, Bengaluru, Karnataka 560061</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-lime-500 flex-shrink-0" />
                <span className="text-gray-300">+91 90359 63983</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-lime-500 flex-shrink-0" />
                <span className="text-gray-300">techgamefusion@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Limefy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;