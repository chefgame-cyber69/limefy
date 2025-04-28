import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { serviceCategories } from '../data/services';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartSummary: React.FC = () => {
  const { cart, removeFromCart } = useAppContext();
  
  const selectedServices = useMemo(() => {
    return cart.map(cartItem => {
      const service = serviceCategories
        .flatMap(category => category.services)
        .find(service => service.id === cartItem.serviceId);
      
      return {
        ...cartItem,
        service
      };
    }).filter(item => item.service !== undefined);
  }, [cart]);
  
  if (selectedServices.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <ShoppingBag size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
        <p className="text-gray-600 mb-4">Select services to get started with your project.</p>
        <Link 
          to="/services" 
          className="inline-block bg-lime-500 hover:bg-lime-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300"
        >
          Browse Services
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Selected Services</h3>
        
        <div className="space-y-4">
          {selectedServices.map(item => (
            <div key={item.serviceId} className="flex justify-between items-start pb-4 border-b border-gray-100">
              <div>
                <h4 className="font-medium text-gray-800">{item.service?.title}</h4>
                <p className="text-sm text-gray-500">{item.service?.price}</p>
                {item.service?.disclaimer && (
                  <p className="text-xs text-gray-500 italic">{item.service?.disclaimer}</p>
                )}
              </div>
              <button 
                onClick={() => removeFromCart(item.serviceId)}
                className="text-red-500 hover:text-red-700 transition-colors"
                aria-label="Remove item"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-gray-600 mb-2">
            Exact pricing will be determined based on project specifications.
          </p>
          <p className="text-sm text-gray-500">
            Contact us for a detailed quote tailored to your specific requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;