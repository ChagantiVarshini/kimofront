import axios from 'axios';
const response = await axios.post(`${process.env.REACT_APP_API_URL}/orders`, orderData);

const API_URL = process.env.REACT_APP_API_URL;

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products", error);
    }
};

export const placeOrder = async (orderDetails) => {
    try {
        const response = await axios.post(`${API_URL}/orders`, orderDetails);
        return response.data;
    } catch (error) {
        console.error("Error placing order", error);
    }
};

export const getOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/orders`);
        return response.data;
    } catch (error) {
        console.error("Error fetching orders", error);
    }
};
