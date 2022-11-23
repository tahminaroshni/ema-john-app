import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <nav>
      <h2 style={{ color: 'burlywood' }}><i>Free Meal</i></h2>
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/signIn">Sign In</a></li>
      </ul>
    </nav>
  );
};

export default Header;