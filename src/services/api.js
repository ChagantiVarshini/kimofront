import api from '../api/api';

// Usage example
api.get('/api/orders')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
