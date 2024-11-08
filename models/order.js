const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  products: [
    {
      product: { type: String, required: true },  // Ensure 'product' matches the data being sent
      quantity: { type: Number, required: true },
    },
  ],
  shippingAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  status: {
    type: String,
    default: 'Pending', // Default order status
  }
});

// Create and export the Order model
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
