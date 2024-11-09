import React from 'react';
import './Navbar.css'; // You can customize styles in Navbar.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>My Store</h2>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
