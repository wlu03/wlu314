import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Automate Algorithm Design',
      description:
        'Enhanced genome performance prediction on a 5.9 million-image dataset, using MLP and KNN surrogate models for improved model accuracy.',
      tags: ['Python', 'PyTorch', 'Scikit-Learn', 'AWS'],
      logo: '/img/vipprogram.jpg',
      link: 'https://vip.gatech.edu/teams/vvk',
    },
    {
      title: 'Personal Website',
      description:
        'Designed in Figma, my website was implemented using HTML, CSS, and JavaScript, then hosted online through Vercel.',
      tags: ['HTML/CSS', 'JavaScript', 'Figma', 'React'],
      logo: '/img/websitelogo.png',
      link: 'wesley.lu',
    },
    {
      title: 'Pairs Trading with Machine Learning',
      description:
        'Applied machine learning to find trading pairs and predict price trends, using public datasets and custom APIs.',
      tags: ['Python', 'Matplotlib', 'Scikit-Learn', 'TensorFlow', 'SQL'],
      logo: '/img/stocklogo.png',
      link: 'https://wlu314.github.io/CS4641/',
    },
    {
      title: 'Spindle',
      description:
        'A no-code app that sets up a NoSQL database and generates RESTful APIs by uploading a CSV, automating backend setup.',
      tags: ['TypeScript', 'JavaScript', 'MongoDB', 'LangChain'],
      logo: '/img/spindlelogo.png',
      link: 'spindleapi.com',
    },
    {
      title: 'Algorithmic Puzzle Solving',
      description:
        'I tackle logic challenges by solving Jane Street puzzles, using simulations and programming to find solutions.',
      tags: ['Python', 'Java', 'Jupyter Notebook'],
      logo: '/img/puzzlelogo.avif',
      link: 'https://www.janestreet.com/puzzles/current-puzzle/',
    },
    {
      title: 'LC2200 Processor',
      description:
        'Developed an LC2200 emulator to simulate ALU operations, register updates, interrupt handling, and paging.',
      tags: ['C++'],
      logo: '/img/cpulogo.jpg',
      link: '',
    },
    {
      title: 'Spotify Stats Tool',
      description:
        'An Android app that displays user stats, with features like an artist guessing game, friend lists, and more.',
      tags: ['Java', 'Android Studio', 'Figma', 'Firebase', 'SpotifyAPI'],
      logo: '/img/spotifylogo.svg',
      link: 'https://github.com/wlu314/Spotify-Stats-Tool',
    },
  ];

  return (
    <div>
      <h1 className="project_title">Projects & Research.</h1>
      <div className="container">
        <div className="grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cardLink"
            >
              <div className="card">
                <div className="cardTitleContainer">
                  <img src={project.logo} alt={`${project.title} logo`} className="cardLogo" />
                  <h2 className="cardTitle">{project.title}</h2>
                </div>
                <p className="cardDescription">{project.description}</p>
                <div className="tagContainer">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
