import React, { createContext, useContext, useState } from 'react';
import { CartItem, UserDetails } from '../types';

interface AppContextType {
  cart: CartItem[];
  addToCart: (serviceId: string) => void;
  removeFromCart: (serviceId: string) => void;
  clearCart: () => void;
  user: UserDetails;
  signIn: (username: string, email: string) => void;
  signOut: () => void;
  checkoutStep: number;
  setCheckoutStep: (step: number) => void;
  uploadedFiles: File[];
  setUploadedFiles: (files: File[]) => void;
  email: string;
  setEmail: (email: string) => void;
}

const defaultUser: UserDetails = {
  username: '',
  email: '',
  isSignedIn: false
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<UserDetails>(defaultUser);
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [email, setEmail] = useState('');

  const addToCart = (serviceId: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.serviceId === serviceId);
      if (existingItem) {
        return prevCart.map(item => 
          item.serviceId === serviceId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { serviceId, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (serviceId: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.serviceId === serviceId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item => 
          item.serviceId === serviceId 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      } else {
        return prevCart.filter(item => item.serviceId !== serviceId);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const signIn = (username: string, email: string) => {
    setUser({
      username,
      email,
      isSignedIn: true
    });
  };

  const signOut = () => {
    setUser(defaultUser);
  };

  return (
    <AppContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      user,
      signIn,
      signOut,
      checkoutStep,
      setCheckoutStep,
      uploadedFiles,
      setUploadedFiles,
      email,
      setEmail
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};