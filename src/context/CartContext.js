// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId, quantity) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(item => item.productId === productId);
      if (existingItem) {
        return prevCartItems.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCartItems, { productId, quantity }];
      }
    });
  };

  // Function to clear the cart after placing an order
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context in other components
export const useCart = () => useContext(CartContext);
