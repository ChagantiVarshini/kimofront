import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    alert('Login successful');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const addToCart = async (product) => {
  const user = {
    name: 'John Doe',  // Ideally, this would come from the user session or context
    email: 'john@example.com',  // Same here
  };

  const shippingAddress = {
    street: '123 Street',
    city: 'CityName',
    state: 'StateName',
    zip: '12345',
  };

  const orderData = {
    user,
    products: [
      {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    ],
    shippingAddress,
  };

  try {
    const response = await axios.post('http://localhost:5000/api/cart', orderData);
    console.log(response.data.message);
    // You can redirect the user to the place order page after successful cart update
    navigate('/place-order');
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export default LoginPage;
