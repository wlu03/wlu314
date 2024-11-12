import React, { useEffect, useState } from 'react';
import './HomeScreen.css';

function HomeScreen() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  
  const roles = ["Developer", "Designer", "Researcher"];
  const easterEggRole = "Gamer";

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;

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
    <div className="homeContainer">
      <div className="content">
        <h1 className="title">Hello.</h1>
        <h1 className="title">I’m Wesley D. Lu.</h1>
        <h1 className="typing">I’m a {text}</h1>
        <button 
          className={`resumeButton ${isHovered ? 'resumeButtonHover' : ''}`}
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

export default HomeScreen;
