const express = require('express'); // Only require express once
const mongoose = require('mongoose');
const ordersRoute = require('./routes/orders'); // Import the orders route

const app = express();

app.use(express.json()); // Middleware to parse JSON body

app.use('/api/orders', ordersRoute); // Mount orders route under '/api/orders'

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/mydb'; // Replace 'mydb' with your actual DB name
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start the server
const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
