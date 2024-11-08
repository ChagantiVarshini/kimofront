// backend/routes/cartRoutes.js

const express = require('express');
const Cart = require('../models/cartModel');

const router = express.Router();

// POST request to save cart
router.post('/', async (req, res) => {
  const { user, products, shippingAddress } = req.body;
  
  try {
    const newCart = new Cart({
      user,
      products,
      shippingAddress,
    });
    await newCart.save();
    res.status(201).json({ message: 'Cart saved successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error saving cart', error });
  }
});

// GET request to retrieve cart by userId
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ 'user._id': userId }); // Search by userId
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching cart', error });
  }
});

module.exports = router;
