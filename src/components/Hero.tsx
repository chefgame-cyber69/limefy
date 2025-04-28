import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-32">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your <span className="text-lime-400">Digital Presence</span> with Limefy
          </h1>
          
          <p className="text-xl mb-8 text-gray-200">
            Professional services for websites, videos, photos, social media, and advertising - all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/services" 
              className="bg-lime-500 hover:bg-lime-600 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300 flex items-center justify-center"
            >
              Explore Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300 flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;