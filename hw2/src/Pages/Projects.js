import React, { useState } from 'react';
import './Projects.css'; 

const Projects = () => {
  const projects = [
    {
      title: 'Mobile Fitness App',
      description: 'Developed a full-stack mobile application using the MAUI .NET framework connected to a remote Node.js server with a MySQL database through Express.js. Used SQL Management Studio to set up the database. \n\nLed a team to effectively design and integrate app features within a structured timeline using GitHub and ClickUp. \n\nIntegrated REST APIs to enable barcode database access, google login and barcode recognition from a live camera. Deserialized JSON data into the MVVM structured class system of the application.',
      images: ['image1.png', 'image3.png', 'image2.png'],
      technologies: 'C#, .NET, Node.js, REST API, MySQL, Xamarin, MUAI, MVVM'
    },
    {
      title: 'Rocket Propulsion Analysis',
      description: 'Created a Rocket Propulsion Simulation Analysis software using C++ to take data on rocket flight path parameters from a UI and perform physics calculations to predict velocity and mass at any given time. \n\nI used standard programming practices to structure the application to allow for modulation and scalability.',
      images: ['image4.png', 'image6.png', 'image5.png'],
      technologies: 'Windows.h, iomanip, conio.h, lists, iterators'
    },
    {
      title: 'Click Bots',
      description: 'Developed “Click-Bots” with C++ and Windows.h to simulate adaptable human input by manipulating keyboard and mouse movement. This was used to make appointment reservations by automatically checking for earlier times and sending a mobile notification when it was available. This application saved a year of waiting time. \n\nMade click bots in Python with image recognition to automate user input with dynamically changing websites, significantly reducing bugs and mis-clicking.',
      images: ['image7.png', 'image8.png', 'image9.png'],
      technologies: 'OpenCV, Python, Numpy, Windows.h, stdlib.h, vectors'
    }
  ];

  const [currentImageIndices, setCurrentImageIndices] = useState(Array(projects.length).fill(0));

  const nextSlide = (index) => {
    setCurrentImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[index] = (newIndices[index] + 1) % projects[index].images.length;
      return newIndices;
    });
  };

  const prevSlide = (index) => {
    setCurrentImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[index] = (newIndices[index] - 1 + projects[index].images.length) % projects[index].images.length;
      return newIndices;
    });
  };

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className={`project-block ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="slideshow">
            <img 
                src={project.images[currentImageIndices[index]]}
                alt={`Project ${index + 1} img ${currentImageIndices[index] + 1}`} 
            />
            <div className="slide-controls">
            <img
                src="previous.png"
                alt="Previous"
                className="slide-icon"
                onClick={() => nextSlide(index)}
              />
              <img
                src="next.png"
                alt="Next"
                className="slide-icon"
                onClick={() => prevSlide(index)}
              />
            </div>
          </div>
          <div className="project-details">
            <h2>{project.title}</h2>
            <pre className="description">{project.description}</pre>
            <p className="technologies">{project.technologies}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;