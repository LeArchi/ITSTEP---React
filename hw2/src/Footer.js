import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="right-section-footer">
        <p>Thank you for visiting my personal page</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="left-section-footer">
        <form>
          <textarea placeholder="Leave a short message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;