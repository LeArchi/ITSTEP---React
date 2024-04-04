import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import { useAppContext } from '../Utils/Context';

const Footer = () => {
  const { firestore } = useAppContext();
  const [shortMessage, setShortMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setShortMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await firestore.collection('shortMessages').add({
        message: shortMessage,
        timestamp: new Date()
      });
      setShortMessage('');
      setSubmitted(true);
    } catch (error) {
    }
  };

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
        {submitted && (
          <p className="submitted-message">Message submitted successfully!</p>
        )}
        <form onSubmit={handleSubmit}>
          <textarea 
              placeholder="Leave a short message"
              value={shortMessage}
              onChange={handleChange}
              disabled={submitted}
            ></textarea>
            <button type="submit" disabled={submitted}>Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;