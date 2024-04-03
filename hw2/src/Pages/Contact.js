import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitted) {
      alert('You have already submitted a message.');
      return;
    }
    if (!email || !message) {
      alert('Please fill out all fields');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    // validation passed.
    setShowConfirmation(true);
    setIsSubmitted(true);
    setEmail('');
    setMessage('');
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            disabled={isSubmitted}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
            disabled={isSubmitted}
          />
        </div>
        <button type="submit" disabled={isSubmitted}>Submit</button>
      </form>
      {showConfirmation && (
        <div className="confirmation-message">
          Thank you for your message! I will respond soon.
        </div>
      )}
    </div>
  );
}

export default Contact;