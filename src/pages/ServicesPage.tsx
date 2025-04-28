import React from 'react';
import { serviceCategories } from '../data/services';
import ServiceCategory from '../components/ServiceCategory';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const ServicesPage: React.FC = () => {
  const { cart } = useAppContext();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="pt-20 bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Choose from our comprehensive range of digital services to enhance your online presence.
          </p>
        </div>
      </div>

      {/* Service Categories Nav */}
      <div className="sticky top-16 bg-white shadow-md z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-6 overflow-x-auto pb-2 scrollbar-hide">
              {serviceCategories.map(category => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="text-gray-700 hover:text-lime-500 font-medium whitespace-nowrap transition-colors"
                >
                  {category.title}
                </a>
              ))}
            </div>
            
            {totalItems > 0 && (
              <Link 
                to="/cart" 
                className="flex items-center bg-lime-500 hover:bg-lime-600 text-white py-2 px-4 rounded-md transition-colors"
              >
                <ShoppingCart size={18} className="mr-2" />
                <span>View Cart ({totalItems})</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-10">
        {serviceCategories.map(category => (
          <ServiceCategory key={category.id} category={category} />
        ))}
        
        {/* CTA */}
        <div className="mt-16 text-center">
          {totalItems > 0 ? (
            <Link 
              to="/cart" 
              className="inline-block bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300"
            >
              Proceed with Selected Services
            </Link>
          ) : (
            <p className="text-gray-600 text-lg">
              Select services above to get started with your project.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;