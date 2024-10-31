import React, { useRef } from 'react';
import Homescreen from './Pages/Home/Homescreen';
import AboutMe from './Pages/Home/AboutMe';
import Experience from './Pages/Home/Experience';
import Projects from './Pages/Home/Projects';

const Sections = () => {
  return (
    <div>
        <Homescreen />
        <AboutMe />
        <Experience />
        <Projects />
    </div>
  );
};

export default Sections;
