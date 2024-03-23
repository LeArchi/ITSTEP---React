import React from 'react';

const AboutMe = ({ name, phone, email, city, photo }) => {
  
    const photoUrl = process.env.PUBLIC_URL + photo;
  
    return (
    <div className="about-me">
      <div style={{"width" : "50%", "float" : "left"}}>
        <h2>About Me</h2>
        <p>Name: {name}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>City: {city}</p>
      </div>
      < img src={photoUrl} alt="Profile" />
    </div>
  );
};

export default AboutMe;