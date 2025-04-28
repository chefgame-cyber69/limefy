import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Check } from 'lucide-react';

const steps = [
  { id: 0, name: 'Review Services' },
  { id: 1, name: 'Your Information' },
  { id: 2, name: 'Upload Files' },
  { id: 3, name: 'Complete Order' }
];

const CheckoutSteps: React.FC = () => {
  const { checkoutStep } = useAppContext();
  
  return (
    <div className="py-6">
      <div className="flex items-center justify-between w-full">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.id < checkoutStep
                  ? 'bg-lime-500 text-white'
                  : step.id === checkoutStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-500'
              }`}>
                {step.id < checkoutStep ? (
                  <Check size={20} />
                ) : (
                  <span>{step.id + 1}</span>
                )}
              </div>
              <span className={`mt-2 text-sm font-medium ${
                step.id <= checkoutStep ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {step.name}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`h-0.5 w-full max-w-24 ${
                steps[index + 1].id <= checkoutStep ? 'bg-lime-500' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckoutSteps;