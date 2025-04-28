import React from 'react';
import { Service } from '../types';
import { useAppContext } from '../context/AppContext';
import { PlusCircle, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { cart, addToCart, removeFromCart } = useAppContext();
  
  const isInCart = cart.some(item => item.serviceId === service.id);
  
  const handleToggleService = () => {
    if (isInCart) {
      removeFromCart(service.id);
    } else {
      addToCart(service.id);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-blue-800">{service.price}</span>
            {service.discountPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">{service.discountPrice}</span>
            )}
          </div>
          
          {service.disclaimer && (
            <p className="text-sm text-gray-500 italic">{service.disclaimer}</p>
          )}
        </div>
        
        <button
          onClick={handleToggleService}
          className={`mt-4 w-full py-2 px-4 rounded-md flex items-center justify-center transition-colors duration-300 ${
            isInCart 
              ? 'bg-lime-100 text-lime-700 hover:bg-lime-200' 
              : 'bg-lime-500 text-white hover:bg-lime-600'
          }`}
        >
          {isInCart ? (
            <>
              <CheckCircle size={18} className="mr-2" />
              <span>Selected</span>
            </>
          ) : (
            <>
              <PlusCircle size={18} className="mr-2" />
              <span>Select</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;