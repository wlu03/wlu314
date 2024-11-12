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
    maxWidth: '60vw',
    padding: '10rem',
    margin: '0 auto',
    color: '#333',
    fontFamily: 'Roboto, Arial, sans-serif',
    backgroundColor: '#ffffff',
    minHeight: '50rem',
  },
  textContainer: {
    flex: 1,
    textAlign: 'left',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.5em',
    lineHeight: '1.6',
    marginBottom: '1rem',
    fontWeight: '400',
  },
};

export default AboutMe;
