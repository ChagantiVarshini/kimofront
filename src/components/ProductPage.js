import React from 'react';
import { useCart } from '../context/CartContext';  // Import the custom hook

const ProductPage = () => {
  const { addToCart } = useCart();  // Get addToCart function from the context

  const handleAddToCart = (productId, quantity) => {
    addToCart(productId, quantity);  // Use addToCart function provided by context
  };

  return (
    <div>
      <h2>Product Page</h2>
      <button onClick={() => handleAddToCart(1, 2)}>Add Product to Cart</button> {/* Example button */}
    </div>
  );
};

export default ProductPage;
