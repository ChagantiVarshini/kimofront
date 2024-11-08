import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []); // This runs only once on component mount

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]); // This runs whenever cartItems state changes

  // Function to handle removing an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCart);
  };

  // Function to handle increasing quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {/* Display cart items */}
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increaseQuantity(index)}>Increase Quantity</button>
            <button onClick={() => decreaseQuantity(index)}>Decrease Quantity</button>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
