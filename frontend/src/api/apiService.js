import axiosInstance from './axios';

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data; // Return products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw error for further handling
  }
};

// Fetch a single product by ID
export const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data; // Return product data
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; // Re-throw error for further handling
  }
};

// Fetch all orders (example for the order page)
export const getOrders = async () => {
  try {
    const response = await axiosInstance.get('/orders');
    return response.data; // Return orders
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error; // Re-throw error for further handling
  }
};

// Place a new order
export const placeOrder = async (orderData) => {
  try {
    const response = await axiosInstance.post('/orders', orderData);
    return response.data; // Return placed order data
  } catch (error) {
    console.error("Error placing order:", error);
    throw error; // Re-throw error for further handling
  }
};
