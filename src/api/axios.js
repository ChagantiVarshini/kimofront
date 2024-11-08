import axios from 'axios';

// You can use the environment variable or the default proxy
const API_URL = process.env.REACT_APP_API_URL || '/api';

export const getProducts = () => {
  return axios.get(`${API_URL}/products`);
};
