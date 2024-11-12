import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="container">
      <div className="textContainer">
        <h1 className="title">About Me.</h1>
        <p className="paragraph">
          I'm Wesley Lu, a computer science student at Georgia Tech specializing in Artificial Intelligence and System Architecture. I'm passionate about finance and technology, with a strong focus on developing algorithmic trading strategies powered by machine learning.
        </p>
        <p className="paragraph">
          Outside of coding, I appreciate nature through exercising, sightseeing, and snowboarding. I enjoy staying active, trying new restaurants, and exploring new hobbies/interests. I also enjoy poker and chess.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
