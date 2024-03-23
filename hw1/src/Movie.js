import React from 'react';

const Movie = ({ name, director, year, studio, poster }) => {

    const posterUrl = process.env.PUBLIC_URL + poster;

  return (
    <div className="movie">
      <div style={{"width" : "50%", "float" : "left"}}>
        <h2>{name}</h2>
        <p>Director: {director}</p>
        <p>Year of Release: {year}</p>
        <p>Film Studio: {studio}</p>
      </div>
        <img src={posterUrl} alt={`${name} Poster`} height="300px"/>
    </div>
  );
};

export default Movie;