import React from 'react';

const Navbar = ({ scrollToSection, homeRef, aboutRef, experienceRef, projectsRef, activeSection }) => {
    return (
      <nav style={styles.navbar}>
        <ul style={styles.navLinks}>
          <li
            onClick={() => scrollToSection(homeRef)}
            style={activeSection === 'home' ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            home
          </li>
          <li
            onClick={() => scrollToSection(aboutRef)}
            style={activeSection === 'about' ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            about
          </li>
          <li
            onClick={() => scrollToSection(experienceRef)}
            style={activeSection === 'experience' ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            experience
          </li>
          <li
            onClick={() => scrollToSection(projectsRef)}
            style={activeSection === 'projects' ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            projects
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1YP50XNP7emZuAMvxnKRrtcNH0t8hAO5Z/edit?usp=sharing&ouid=105095449523402453832&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  const styles = {
    navbar: {
      width: '100%',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'flex-start',
      backgroundColor: '#ffffff',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1,
      transition: 'transform 0.5s ease, opacity 0.5s ease',
    },
    navLinks: {
      listStyleType: 'none',
      display: 'flex',
      gap: '20px',
      padding: 0,
      paddingLeft: 30,
      margin: 0,
      fontSize: '30px',
      color: '#333',
      fontWeight: 'bold',
    },
    link: {
      color: '#333',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    activeLink: {
      color: '#007bff', // Active color
      borderBottom: '2px solid #007bff',
    },
  };

export default Navbar;
