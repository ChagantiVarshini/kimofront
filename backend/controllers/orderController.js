const Order = require('../models/orderModel'); // Ensure this model exists

const createOrder = async (req, res) => {
  try {
    const { products, userDetails, paymentDetails } = req.body;

    // Validate input
    if (!products || !userDetails || !paymentDetails) {
      return res.status(400).json({ message: 'Missing order data' });
    }

    const newOrder = new Order({
      products,
      userDetails,
      paymentDetails,
    });

    await newOrder.save();

    res.status(201).json({
      message: 'Order placed successfully!',
      order: newOrder,
    });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Failed to place the order' });
  }
};

module.exports = { createOrder };
