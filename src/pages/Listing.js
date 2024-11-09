import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Listing.css';
import { useCart } from '../context/CartContext';
// Importing images for products
import phoneImage from '../assets/phone.jpg';
import laptopImage from '../assets/laptop.jpg';
import headphonesImage from '../assets/headphones.jpg';
import smartwatchImage from '../assets/smartwatch.jpg';
import tabletImage from '../assets/tablet.jpg';
import tvImage from '../assets/tv.jpg';
import cameraImage from '../assets/camera.jpg';
import speakerImage from '../assets/speakers.jpg';
import smartBulbImage from '../assets/smartbulb.jpg';
import droneImage from '../assets/drone.jpg';
import Tshirt from '../assets/tshirt.jpg';
import Jeans from '../assets/jeans.jpg';
import Jacket from '../assets/jacket.jpg';
import Sneakers from '../assets/sneackers.jpg';
import Watch from '../assets/watch.jpg';
import Hat from '../assets/hat.jpg';
import Scarf from '../assets/scarf.jpg';
import Sunglasses from '../assets/sunglasses.jpg';
import shirt from '../assets/shirt.jpg';
import Belt from '../assets/belt.jpg';
import Refrigerator from '../assets/fridge.jpg';
import Washing from '../assets/washingmachine.jpg';
import Microwave from '../assets/microwave.jpg';
import Vacuum from '../assets/vaccum.jpg';
import Coffee from '../assets/coffee.jpg';
import Blender from '../assets/bleander.jpg';
import Air from '../assets/ac.jpg';
import Iron from '../assets/iron.jpg';
import Toaster from '../assets/toster.jpg';
import Fan from '../assets/fan.jpg';
import Lipstick from '../assets/lipstick.jpg';
import Foundation from '../assets/foundation.jpg';
import Shampoo from '../assets/shampoo.jpg';
import Perfume from '../assets/perfume.jpg';
import nailpolish from '../assets/nailpolish.jpg';
import Moisturizer from '../assets/moisturiser.jpg';
import hairserum from '../assets/hairserum.jpg';
import facemask from '../assets/facemask.jpg';
import Eyeliner from '../assets/eyeliner.jpg';
import hairstraightner from '../assets/hair straightner.jpg';

const Listing = () => {
  const { category } = useParams(); // Get the category from the URL
  const { addToCart } = useCart(); // Hook for navigation

  const categories = [
    {
      name: 'Electronics',
      id: 'electronics',
      products: [
        { id: 1, name: 'Phone', price: '$299', image: phoneImage },
        { id: 2, name: 'Laptop', price: '$899', image: laptopImage },
        { id: 3, name: 'Headphones', price: '$50', image: headphonesImage },
        { id: 4, name: 'Smartwatch', price: '$199', image: smartwatchImage },
        { id: 5, name: 'Tablet', price: '$350', image: tabletImage },
        { id: 6, name: 'TV', price: '$500', image: tvImage },
        { id: 7, name: 'Camera', price: '$700', image: cameraImage },
        { id: 8, name: 'Speakers', price: '$150', image: speakerImage },
        { id: 9, name: 'Smart Bulb', price: '$20', image: smartBulbImage },
        { id: 10, name: 'Drone', price: '$250', image: droneImage },
      ],
    },
    {
      name: 'Fashion',
      id: 'fashion',
      products: [
        { id: 11, name: 'T-shirt', price: '$25', image: Tshirt },
        { id: 12, name: 'Jeans', price: '$40', image: Jeans },
        { id: 13, name: 'Jacket', price: '$60', image: Jacket },
        { id: 14, name: 'Sneakers', price: '$75', image: Sneakers },
        { id: 15, name: 'Watch', price: '$100', image: Watch },
        { id: 16, name: 'Hat', price: '$20', image: Hat },
        { id: 17, name: 'Scarf', price: '$15', image: Scarf },
        { id: 18, name: 'Sunglasses', price: '$45', image: Sunglasses },
        { id: 19, name: 'Shirt', price: '$30', image: shirt },
        { id: 20, name: 'Belt', price: '$18', image: Belt },
      ],
    },
    {
      name: 'Home Appliances',
      id: 'home-appliances',
      products: [
        { id: 21, name: 'Refrigerator', price: '$799', image: Refrigerator },
        { id: 22, name: 'Washing Machine', price: '$500', image: Washing },
        { id: 23, name: 'Microwave', price: '$150', image: Microwave },
        { id: 24, name: 'Vacuum Cleaner', price: '$100', image: Vacuum },
        { id: 25, name: 'Coffee Maker', price: '$80', image: Coffee },
        { id: 26, name: 'Blender', price: '$60', image: Blender },
        { id: 27, name: 'Air Conditioner', price: '$400', image: Air },
        { id: 28, name: 'Iron', price: '$35', image: Iron },
        { id: 29, name: 'Toaster', price: '$25', image: Toaster },
        { id: 30, name: 'Fan', price: '$40', image: Fan },
      ],
    },
    {
      name: 'Beauty Products',
      id: 'beauty-products',
      products: [
        { id: 31, name: 'Lipstick', price: '$15', image: Lipstick },
        { id: 32, name: 'Foundation', price: '$25', image: Foundation },
        { id: 33, name: 'Shampoo', price: '$10', image: Shampoo },
        { id: 34, name: 'Perfume', price: '$50', image: Perfume },
        { id: 35, name: 'Nail Polish', price: '$8', image: nailpolish },
        { id: 36, name: 'Moisturizer', price: '$18', image: Moisturizer },
        { id: 37, name: 'Hair Serum', price: '$20', image: hairserum },
        { id: 38, name: 'Face Mask', price: '$12', image: facemask },
        { id: 39, name: 'Eyeliner', price: '$10', image: Eyeliner },
        { id: 40, name: 'Hair Straightener', price: '$45', image: hairstraightner },
      ],
    },
  ];

  const categoryData = category
    ? categories.find((cat) => cat.id === category.toLowerCase())
    : null;

  return (
    <div className="listing">
      {category ? (
        categoryData ? (
          <div className="category" id={categoryData.id}>
            <h3 className="category-title">{categoryData.name}</h3>
            <ul>
              {categoryData.products.map((product) => (
                <li key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.price}</p>
                  <button onClick={() => addToCart(product.id, 1)}>
                    Add to Cart
                  </button> {/* Adjusted */}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Category not found!</p>
        )
      ) : (
        categories.map((category) => (
          <div key={category.id} className="category">
            <h3 className="category-title">{category.name}</h3>
            <ul>
              {category.products.map((product) => (
                <li key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.price}</p>
                  <button onClick={() => addToCart(product.id, 1)}>
                    Add to Cart
                  </button> {/* Adjusted */}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Listing;
