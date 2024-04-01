import React from 'react';
import './Loader.css'; 

const Loader = () => {
  return (
    <div className="loader-container">
      <img src='image1.jpg' alt="Loading..." className="spinner-image" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;