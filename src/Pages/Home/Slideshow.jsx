import React, { useState, useEffect } from 'react';

const images = [
    'img/apptroniks.png',
    'img/gates.png',
    'img/laketahoesnowboard.png',
    'img/sunset.png',
  ];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.slideshowContainer}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={styles.image}
      />
    </div>
  );
}

const styles = {
  slideshowContainer: {
    width: '300px',
    height: '400px',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default Slideshow;
