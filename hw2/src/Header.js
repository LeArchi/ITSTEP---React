import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link to="/">About</Link>
        <span className="divider">|</span>
        <Link to="/projects">Projects</Link>
        <span className="divider">|</span>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;