import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import heroImage from '../assets/hero.jpg';
import electronicsImage from '../assets/electronics.jpg';
import fashionImage from '../assets/fashion.jpg';
import homeAppliancesImage from '../assets/homeapp.jpg';
import beautyImage from '../assets/beauty.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/listing/${category}`);
  };

  return (
    <div>
      <header className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Products</h1>
          <p>Unbeatable deals on top brands and exclusive items. Shop now and save!</p>
          <button className="hero-btn" onClick={() => navigate('/listing')}>
            Shop Now
          </button>
        </div>
        <img className="hero-image" src={heroImage} alt="Hero banner" />
      </header>

      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-list">
          <div className="category-item" onClick={() => handleCategoryClick('electronics')}>
            <img src={electronicsImage} alt="Electronics" />
            <p>Electronics</p>
          </div>
          <div className="category-item" onClick={() => handleCategoryClick('fashion')}>
            <img src={fashionImage} alt="Fashion" />
            <p>Fashion</p>
          </div>
          <div className="category-item" onClick={() => handleCategoryClick('home-appliances')}>
            <img src={homeAppliancesImage} alt="Home Appliances" />
            <p>Home Appliances</p>
          </div>
          <div className="category-item" onClick={() => handleCategoryClick('beauty-products')}>
            <img src={beautyImage} alt="Beauty Products" />
            <p>Beauty Products</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
