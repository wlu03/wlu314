import React, { useEffect, useState } from 'react';

function HomeScreen() {
  const [text, setText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const fullText = "developer, designer, researcher";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.homeContainer}>
      <div style={styles.content}>
        <h1 style={styles.title}>hello.</h1>
        <h1 style={styles.title}>i’m wesley lu.</h1>
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    height: '100vh',
    backgroundColor: '#ffffff',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    paddingLeft: '100px',
    textAlign: 'left',
  },
  title: {
    fontSize: '80px',
    fontWeight: 'bold',
    color: '#000000',
    margin: '0px 0 10px 0',
  },
  typing: {
    fontSize: '80px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #A4508B, #5F0A87, #007AFF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRight: '2px solid #000',
    animation: 'blink 0.75s step-end infinite',
    margin: '5px 0',
  },
  resumeButton: {
    marginTop: '20px',
    padding: '12px 24px',
    fontSize: '18px',
    fontWeight: 500,
    color: '#007aff',
    backgroundColor: 'transparent',
    border: '2px solid #007aff',
    borderRadius: '12px',
    cursor: 'pointer',
    outline: 'none',
    width: '200px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  resumeButtonHover: {
    color: '#fff',
    background: 'linear-gradient(90deg, #A4508B, #5F0A87, #007AFF)',
    transform: 'scale(1.05)',
  },
};

export default HomeScreen;
