import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Custom hook for managing cart items
import axios from 'axios'; // For making HTTP requests
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { cartItems, clearCart } = useCart(); // Access cart items and function to clear cart
  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [user, setUser] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in shippingAddress) {
      setShippingAddress((prev) => ({ ...prev, [name]: value }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission (order placement)
const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate input fields
  if (!user.name || !user.email || !shippingAddress.street || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zip) {
    setMessage('Please fill in all fields');
    return;
  }

  if (cartItems.length === 0) {
    setMessage('No items in cart');
    return;
  }

  // Explicitly construct orderData
  const orderData = {
    user: {
      name: user.name,
      email: user.email,
    },
    products: cartItems.map((item) => ({
      product: item.productId.toString(), // Ensure productId is sent as a string
      quantity: item.quantity,
    })),
    shippingAddress: {
      street: shippingAddress.street,
      city: shippingAddress.city,
      state: shippingAddress.state,
      zip: shippingAddress.zip,
    },
  };

  console.log('Order Data:', orderData); // Log the data being sent to the backend

  setIsLoading(true);
  setMessage('');

  try {
    // Make the POST request to the backend to place the order
    const response = await axios.post('http://localhost:5001/api/orders', orderData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200 || response.status === 201) {
      setMessage('Order placed successfully!');
      clearCart(); // Clear the cart upon successful order
    } else {
      setMessage(`Error placing order: ${response.data.error || 'Unexpected error'}`);
    }
  } catch (error) {
    console.error('Error placing order:', error.response || error.message); // Log error details
    setMessage(`Error placing order: ${error.response?.data?.message || error.message}`);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="place-order-container">
      <h2>Place Your Order</h2>

      {/* Display Cart Items */}
      <div>
        <h3>Your Cart</h3>
        {cartItems.length === 0 ? (
          <p>No items in your cart</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.productId}>
              <p>Product ID: {item.productId} - Quantity: {item.quantity}</p>
            </div>
          ))
        )}
      </div>

      {/* Shipping Address Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Street</label>
          <input type="text" name="street" value={shippingAddress.street} onChange={handleChange} required />
        </div>
        <div>
          <label>City</label>
          <input type="text" name="city" value={shippingAddress.city} onChange={handleChange} required />
        </div>
        <div>
          <label>State</label>
          <input type="text" name="state" value={shippingAddress.state} onChange={handleChange} required />
        </div>
        <div>
          <label>Zip</label>
          <input type="text" name="zip" value={shippingAddress.zip} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>

      {/* Display Status Message */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default PlaceOrder;
