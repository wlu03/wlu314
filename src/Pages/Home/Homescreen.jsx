import React, { useEffect, useState } from 'react';

function HomeScreen() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  
  const roles = ["Developer", "Designer", "Researcher"];
  const easterEggRole = "Gamer";

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    
    // Show "Gamer" every 10th loop

    const currentRole = (loopNum % 10 === 0) 
      ? easterEggRole 
      : roles[loopNum % roles.length];

    const handleTyping = () => {
      const updatedText = isDeleting 
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div style={styles.homeContainer}>
      <div style={styles.content}>
        <h1 style={styles.title}>Hello.</h1>
        <h1 style={styles.title}>I’m Wesley D. Lu.</h1>
        <h1 style={styles.typing}>I’m a {text}</h1>
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
    maxWidth: '60rem',
    padding: '2rem',
    margin: '0 auto',
    height: '20rem',
    marginTop: '10rem',
    marginBottom: '15rem',
    backgroundColor: '#ffffff',
    color: '#333',
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  content: {
    textAlign: 'left',
    width: '100%',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
  },
  typing: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #A4508B, #5F0A87, #007AFF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    margin: '0.5rem 0',
  },
  resumeButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 500,
    color: '#003366',
    backgroundColor: '#e6f0ff',
    border: '0.15rem solid #003366',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  resumeButtonHover: {
    color: '#fff',
    background: 'linear-gradient(90deg, rgba(164, 80, 139, 0.7), rgba(95, 10, 135, 0.7), rgba(0, 122, 255, 0.7))',
    transform: 'scale(1.05)',
  },
};

export default HomeScreen;
