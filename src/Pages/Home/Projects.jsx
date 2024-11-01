import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Automate Algorithm Design',
      description:
        'In a 5.9 million-image airborne object tracking dataset, I implemented MLP and KNN surrogate meta-models to enhance genome performance prediction, improving model selection accuracy.',
      tags: ['Python', 'PyTorch', 'Scikit-Learn', 'AWS'],
      logo: '/img/vipprogram.jpg',
      link: 'https://vip.gatech.edu/teams/vvk',
    },
    {
      title: 'Personal Website',
      description:
        'After designing my website on Figma, I implemented it using HTML, CSS, and JavaScript to host online using Vercel.',
      tags: ['HTML/CSS', 'JavaScript', 'Figma', 'React'],
      logo: '/img/websitelogo.png',
      link: 'wesley.lu',
    },
    {
        title: 'Pairs Trading with Machine Learning',
        description:
          'Using public datasets and APIs, found trading pairs and predict price correlation using supervised and unsupervised machine learning methods.',
        tags: ['Python', 'Matplotlib', 'Scikit-Learn', 'Tensorflow', 'SQL'],
        logo: '/img/stocklogo.png',
        link: 'https://wlu314.github.io/CS4641/',
    },
    {
      title: 'Spindle',
      description:
        'No-code web app that enables users to set up NoSQL database and generate RESTful APIs by uploading a CSV file, simplifying backend setup and generates CRUD endpoints using natural language queries.',
      tags: ['TypeScript', 'JavaScript', 'MongoDB', 'LangChain'],
      logo: '/img/spindlelogo.png',
      link: 'spindleapi.com',
    },
    {
      title: 'Algorithmic Puzzle Solving',
      description:
        'Passionate about tackling complex logic challenges, I enjoy solving Jane Street puzzles through simulations or programming.',
      tags: ['Python', 'Java', 'Jupyter Notebook'],
      logo: '/img/puzzlelogo.avif',
      link: 'https://www.janestreet.com/puzzles/current-puzzle/',
    },
    {
      title: 'LC2200 Processor',
      description:
        'Design an LC2200 emulator to simulate core functions including ALU computations, register updates, manages interrupts and paging for effective memory/process management.',
      tags: ['C++'],
      logo: '/img/cpulogo.jpg',
      link: '',
    },
    {
      title: 'Spotify Stats Tool',
      description:
        'Developed an Android application that stores user information and displays stats. Features include artist guessing game, friend list, and etc. All designs made in Figma.',
      tags: ['Java', 'Android Studio', 'Figma', 'Firebase', 'SpotifyAPI'],
      logo: '/img/spotifylogo.svg',
      link: 'https://github.com/wlu314/Spotify-Stats-Tool',
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Projects & Research.</h1>
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
  );
}

export default Projects;