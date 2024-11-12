import React, { useEffect, useState } from 'react';

function HomeScreen() {
  const [text, setText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const fullText = "Developer, Designer, Researcher";

  useEffect(() => {
    let index = 0;

    function type() {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        setTimeout(() => {
          index = 0;
          setText(''); 
          type();
        }, 5000);
      } else {
        setTimeout(type, 100);
      }
    }

    type();

    return () => clearTimeout();
  }, []);

  return (
    <div style={styles.homeContainer}>
      <div style={styles.content}>
        <h1 style={styles.title}>Hello.</h1>
        <h1 style={styles.title}>I’m Wesley Duanrui Lu.</h1>
        <h1 style={styles.typing}>{text}</h1>
        <button 
          style={isHovered ? {...styles.resumeButton, ...styles.resumeButtonHover} : styles.resumeButton}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => window.open('https://drive.google.com/file/d/1ENMeEVrrUhLOj9VoaPdo29svIi_kAFus/view?usp=sharing', '_blank')}
        >
          View Resume
        </button>
      </div>
    </div>
  );
}

const styles = {
  homeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '60vw',
    padding: '2vw',
    margin: '0 auto',
    height: '40vh',
    marginTop: '20vh',
    backgroundColor: '#ffffff',
    color: '#333',
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  content: {
    textAlign: 'left',
    width: '100%',
  },
  title: {
    fontSize: '3vw',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '0.5vh',
    marginTop: '0.5vh',
  },
  typing: {
    fontSize: '2.5vw',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #A4508B, #5F0A87, #007AFF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    margin: '0.5vh 0',
  },
  resumeButton: {
    marginTop: '1vh',
    padding: '1vh 2vw',
    fontSize: '1vw',
    fontWeight: 500,
    color: '#007aff',
    backgroundColor: 'transparent',
    border: '0.1vw solid #007aff',
    borderRadius: '0.5vw',
    cursor: 'pointer',
    outline: 'none',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  resumeButtonHover: {
    color: '#fff',
    background: 'linear-gradient(90deg, #A4508B, #5F0A87, #007AFF)',
    transform: 'scale(1.1)',
  },
};

export default HomeScreen;
