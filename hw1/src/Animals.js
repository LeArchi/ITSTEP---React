import React from 'react';

const Pet = ({ species, name, age, description, photo }) => {
    
    const photoUrl = process.env.PUBLIC_URL + photo;
  
    return (
    <div className="pet">
        <div style={{"width" : "50%", "float" : "left"}}>
            <h2>{species}</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Description: {description}</p>
        </div>
            <img src={photoUrl} alt={species} />
    </div>
  );
};

export default Pet;