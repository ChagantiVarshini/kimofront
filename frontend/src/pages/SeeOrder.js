import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './SeeOrder.css';
const SeeOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch orders from the backend API
    axios.get('http://localhost:5001/api/orders')  // Ensure your backend is running on port 5001
      .then(response => {
        setOrders(response.data);  // Set the orders in state
        setLoading(false);  // Stop loading once data is fetched
      })
      .catch(err => {
        setError('Failed to fetch orders');
        setLoading(false);  // Stop loading in case of an error
      });
  }, []);  // Empty dependency array to only run on component mount

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order._id}>
              <p>Order ID: {order._id}</p>
              {/* Assuming the products have a name and quantity */}
              <p>Products:</p>
              <ul>
                {order.products.map((item, index) => (
                  <li key={index}>
                    Product ID: {item.product} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeeOrder;
