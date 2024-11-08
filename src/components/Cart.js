import React from 'react';
import { useCart } from '../context/CartContext';  // Import the custom hook to access cart context

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();  // Get cart items and remove function from context

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.productId}>
              Product ID: {item.productId}, Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.productId)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
