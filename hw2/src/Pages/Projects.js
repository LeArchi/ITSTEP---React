import React, { useState } from 'react';
import './Projects.css'; // Import CSS file for styling

const Projects = () => {
  const projects = [
    {
      title: 'Mobile Fitness App',
      description: '- Developed a full-stack mobile application using the MAUI .NET framework connected to a remote Node.js server with a MySQL database through Express.js. Used SQL Management Studio to set up the database. \n\n- Led a team to effectively design and integrate app features within a structured timeline using GitHub and ClickUp. \n\n- Integrated REST APIs to enable barcode database access, google login and barcode recognition from a live camera.Deserialized JSON data into the structured class system of the application.',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
      technologies: 'C#, .NET, Node.js, REST API, MySQL, Xamarin, MUAI'
    },
    {
      title: 'Project 2',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
      technologies: 'React, Node.js, MongoDB'
    },
    {
      title: 'Project 3',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      images: ['image7.jpg', 'image8.jpg', 'image9.jpg'],
      technologies: 'Angular, HTML, CSS'
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