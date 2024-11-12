import React from 'react';

function AboutMe() {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>About Me.</h1>
        <p style={styles.paragraph}>
          I'm Wesley Lu, a computer science student at Georgia Tech specializing in Artificial Intelligence and System Architecture. I'm passionate about finance and technology, with a strong focus on developing algorithmic trading strategies powered by machine learning.
        </p>
        <p style={styles.paragraph}>
          Outside of coding, I appreciate nature through exercising, sightseeing, and snowboarding. I enjoy staying active, trying new restaurants, and exploring new hobbies/interests. I also enjoy poker and chess.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    margin: '0 auto',
    color: '#333',
    fontFamily: 'Roboto, Arial, sans-serif',
    backgroundColor: '#ffffff',
    minHeight: '45rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  textContainer: {
    textAlign: 'left',
    maxWidth: '55vw',
    width: '100%', 
  },
  title: {
    fontSize: '3rem', 
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '0.8rem',
  },
  paragraph: {
    fontSize: '1.7rem',
    lineHeight: '1.5',
    marginBottom: '0.8rem',
    fontWeight: '400',
  },
};

const mediaQuery = `
  @media (min-width: 768px) {
    .container {
      padding: 2rem;
    }
    .title {
      font-size: 2.8rem; 
    }
    .paragraph {
      font-size: 1.3rem; 
    }
  }
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = mediaQuery;
document.head.appendChild(styleTag);

export default AboutMe;
