const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const orderRoutes = require('./routes/orders'); // Import the order routes

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb+srv://varshinichaganti63:Munny1%40%40%40@ecom.0ftd2.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Use the order routes for API requests
app.use('/api/orders', orderRoutes); // All `/api/orders` requests will be handled by the routes in `orders.js`

// Start the server

const port = process.env.PORT || 5001; // Default to 5000 for local development
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
