import React, { useState } from 'react';
import './Navbar.css'; // CSS for the navbar
import logo from '../assets/logo.png'; // Import logo from assets

const Navbar = () => {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
        <img src={logo} alt="Ultrapro Logo" />
        </div>

        <nav className={`nav-links ${isMobileMenuActive ? 'active' : ''}`}>
          <a href="#">Home</a>
          <a href="#">Ecosystem</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Token</a>
          <a href="#">Expo</a>
          <a href="#">Enhanced-Enterprises</a>
        </nav>

        <div className={`nav-buttons ${isMobileMenuActive ? 'active' : ''}`}>
          <button className="whitepaper" style={{ border: '2px solid #ece7e7' }}>Whitepaper</button>
          <button className="contact-us">Contact Us</button>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span>&#9776;</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
