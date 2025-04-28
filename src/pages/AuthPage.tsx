import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogIn, UserPlus, Mail, User, KeyRound } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would authenticate with a backend here
    // For this demo, we'll just simulate a successful login
    signIn(username, email);
    
    // Check if there's a return path in the location state
    const returnTo = location.state?.returnTo || '/';
    navigate(returnTo);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                {isSignUp ? 'Create an Account' : 'Sign In'}
              </h1>
              <p className="text-gray-600 mt-2">
                {isSignUp 
                  ? 'Join Limefy to manage your services and orders'
                  : 'Welcome back to Limefy'
                }
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                      placeholder="johnsmith"
                      required
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="auth-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="auth-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyRound size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              
              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-lime-500 border-gray-300 rounded focus:ring-lime-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Forgot password?
                    </a>
                  </div>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 bg-lime-500 hover:bg-lime-600 text-white rounded-md transition-colors"
              >
                {isSignUp ? (
                  <>
                    <UserPlus size={18} className="mr-2" />
                    Sign Up
                  </>
                ) : (
                  <>
                    <LogIn size={18} className="mr-2" />
                    Sign In
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;