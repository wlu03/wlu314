import React, { useRef } from 'react';
import Homescreen from './Pages/Home/Homescreen';
import AboutMe from './Pages/Home/AboutMe';
import Experience from './Pages/Home/Experience';
import Projects from './Pages/Home/Projects';
import './styles.css'; // Import the CSS file

const Sections = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="header-nav">
        <span onClick={() => scrollToSection(homeRef)}>Home</span>
        <span onClick={() => scrollToSection(aboutRef)}>About</span>
        <span onClick={() => scrollToSection(experienceRef)}>Experience</span>
        <span onClick={() => scrollToSection(projectsRef)}>Projects</span>

        {/* Social icons as links without any text */}
        <a
          href="https://www.linkedin.com/in/-wesley-lu/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/img/linkedin-icon.png" alt="LinkedIn" className="icon" /> 
        </a>
        
        <a
          href="https://github.com/wlu314" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/img/github-icon.jpeg" alt="GitHub" className="icon" /> 
        </a>
      </header>

      <div ref={homeRef}><Homescreen /></div>
      <div ref={aboutRef}><AboutMe /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={projectsRef}><Projects /></div>
    </div>
  );
};

export default Sections;
