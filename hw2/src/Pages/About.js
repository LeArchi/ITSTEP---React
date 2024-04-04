import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="left-section">
        <img src="prof_pic.jpg" alt="Profile" className="profile-image" />
      </div>
      <div className="right-section">
        <div className="name-section">
          <h1>Danylo Lopatnov</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="paragraph-section">
          <p>I'm a full-stack software developer, specializing in back-end languages such as C++ and C#. I developed this website using React.js, Google Firebase database and fully set up the Linux hosting server. I have also created mobile apps using various .NET frameworks and Node.js servers.</p>
          <p>I enjoy participating in cybersecurity CTF (capture the flag) events and have a dedicated team with which I practice weekly. In my free time I challenge myself to ride excessive distances on my bike to enjoy sunrises while camping. I'm also highly curious in any mechanical or electrical systems.</p>
          <Link to="/projects" className="see-projects-button">
            <i className="fas fa-folder-open"></i> See my projects
          </Link>
        </div>
        <div className="education-section">
          <h2>Education</h2>
          <p>- IT Step Academy <br/> - Birmingham City University</p>
        </div>
        <div className="social-media-icons">
          <a href="https://www.instagram.com/danya.lv/" target="_blank" rel="noopener noreferrer">
            <img class="social-media-icons" src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/danylo-lopatnov" target="_blank" rel="noopener noreferrer">
            <img class="social-media-icons" src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;