import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import CartSummary from '../components/CartSummary';
import CheckoutSteps from '../components/CheckoutSteps';
import FileUpload from '../components/FileUpload';
import { ArrowLeft, ArrowRight, CheckSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { 
    cart, 
    checkoutStep, 
    setCheckoutStep, 
    email, 
    setEmail, 
    uploadedFiles,
    clearCart,
    user
  } = useAppContext();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If user tries to access checkout steps without being signed in, redirect to auth
    if (checkoutStep > 0 && !user.isSignedIn) {
      navigate('/auth', { state: { returnTo: '/cart' } });
    }
  }, [checkoutStep, user.isSignedIn, navigate]);

  const handleContinue = () => {
    if (!user.isSignedIn && checkoutStep === 0) {
      navigate('/auth', { state: { returnTo: '/cart' } });
      return;
    }

    if (checkoutStep < 3) {
      setCheckoutStep(checkoutStep + 1);
    } else {
      // Clear the cart and reset checkout state after successful order
      clearCart();
      setCheckoutStep(0);
      alert('Thank you for your order! We will contact you soon.');
      navigate('/');
    }
  };
  
  const handleBack = () => {
    if (checkoutStep > 0) {
      setCheckoutStep(checkoutStep - 1);
    }
  };
  
  const renderStepContent = () => {
    switch (checkoutStep) {
      case 0:
        return <CartSummary />;
      case 1:
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={user.isSignedIn ? user.email : email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                  placeholder="you@example.com"
                  disabled={user.isSignedIn}
                  required
                />
              </div>
              <p className="text-sm text-gray-500">
                We'll use this email to send you updates about your order and to deliver digital products.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Files</h3>
            <p className="text-gray-600 mb-6">
              If you've selected video editing services, upload your raw video files below.
            </p>
            <FileUpload />
          </div>
        );
      case 3:
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
            <div className="space-y-6">
              <CartSummary />
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium text-gray-800 mb-2">Your Information</h4>
                <p className="text-gray-600">{user.isSignedIn ? user.email : email}</p>
              </div>
              
              {uploadedFiles.length > 0 && (
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium text-gray-800 mb-2">Uploaded Files</h4>
                  <p className="text-gray-600">{uploadedFiles.length} files uploaded</p>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium text-gray-800 mb-2">Next Steps</h4>
                <p className="text-gray-600">
                  After submitting your order, our team will review your requirements and contact you to discuss the details.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return <CartSummary />;
    }
  };
  
  const isStepValid = () => {
    switch (checkoutStep) {
      case 0:
        return cart.length > 0;
      case 1:
        return user.isSignedIn || (email && email.includes('@'));
      case 2:
        return true; // File upload is optional
      default:
        return true;
    }
  };
  
  if (cart.length === 0 && checkoutStep === 0) {
    return (
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
          <CartSummary />
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
        
        <CheckoutSteps />
        
        <div className="mt-8">
          {renderStepContent()}
          
          <div className="mt-8 flex justify-between">
            {checkoutStep > 0 ? (
              <button
                onClick={handleBack}
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={18} className="mr-1" />
                Back
              </button>
            ) : (
              <Link 
                to="/services" 
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={18} className="mr-1" />
                Back to Services
              </Link>
            )}
            
            <button
              onClick={handleContinue}
              disabled={!isStepValid()}
              className={`flex items-center px-6 py-2 rounded-md ${
                isStepValid()
                  ? 'bg-lime-500 hover:bg-lime-600 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition-colors`}
            >
              {checkoutStep === 0 && !user.isSignedIn ? (
                <>
                  Sign in to Continue
                  <ArrowRight size={18} className="ml-1" />
                </>
              ) : checkoutStep === 3 ? (
                <>
                  <CheckSquare size={18} className="mr-2" />
                  Complete Order
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight size={18} className="ml-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;