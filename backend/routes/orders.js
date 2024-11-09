const express = require('express');
const router = express.Router();
const Order = require('../models/order'); // Assuming the Order model is defined

// POST /api/orders
router.post('/', async (req, res) => {
  const { user, products, shippingAddress } = req.body;

  // Log incoming data for debugging
  console.log('Received Order Data:', req.body);

  // Validate the incoming data
  if (!user?.name || !user?.email || !Array.isArray(products) || products.length === 0 || !shippingAddress?.street || !shippingAddress?.city || !shippingAddress?.state || !shippingAddress?.zip) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new order instance and save to the database
    const newOrder = new Order({
      user,
      products,
      shippingAddress,
    });

    await newOrder.save();

    // Send success response
    res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Failed to place order', error: error.message });
  }
});
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find(); // Fetch all orders from the database
    res.status(200).json(orders); // Respond with the orders in JSON format
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders' }); // Send error message if an error occurs
  }
});
module.exports = router;
