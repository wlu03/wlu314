import React from 'react';
import Slideshow from './Slideshow'; // Import the Slideshow component

function AboutMe() {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>about me.</h1>
        <p style={styles.paragraph}>
          I'm Wesley Lu, a computer science student at Georgia Tech specializing in Artificial Intelligence and System Architecture. I'm passionate about finance and technology, with a strong focus on developing algorithmic trading strategies powered by machine learning.
        </p>
        <p style={styles.paragraph}>
          Outside of coding, I appreciate nature through exercising, sightseeing, and snowboarding. I enjoy staying active, trying new restaurants, and exploring new hobbies/interests. I also enjoy poker and chess.
        </p>
      </div>
      <div style={styles.slideshowContainer}>
        <Slideshow /> {/* Slideshow positioned to the right */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', // Center horizontally in the viewport
    alignItems: 'center', // Center vertically in the viewport
    maxWidth: '1200px',
    padding: '20px',
    margin: '0 auto',
    color: '#333',
    fontFamily: 'Roboto, Arial, sans-serif',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  },
  textContainer: {
    flex: 1,
    marginRight: '40px',
  },
  slideshowContainer: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    width: '400px', 
  },
  title: {
    fontSize: '80px',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '20px',
    paddingLeft: '80px', 
  },
  paragraph: {
    fontSize: '30px',
    lineHeight: '1.6',
    marginBottom: '15px',
    fontWeight: '400',
    paddingLeft: '80px', 
  },
};

export default AboutMe;
