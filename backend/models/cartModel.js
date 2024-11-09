// backend/models/cartModel.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    name: String,
    email: String,
  },
  products: [{
    productId: Number,
    name: String,
    price: String,
    image: String,
    quantity: Number,
  }],
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
