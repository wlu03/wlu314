import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const canvasRef = useRef(null);
  const aboutContentRef = useRef(null);
  
  // Handle click for all navigation items
  const handleNavClick = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    
    // Get the target section element
    if (aboutContentRef.current) {
      // Find the section inside aboutContent
      const section = aboutContentRef.current.querySelector(`#${sectionId}`);
      
      if (section) {
        // Scroll to the section (with a small offset if needed)
        aboutContentRef.current.scrollTop = section.offsetTop - 20;
      } else if (sectionId === 'about') {
        // Special case for About - scroll to top
        aboutContentRef.current.scrollTop = 0;
      }
    }
  };
  
  useEffect(() => {
    // Canvas animation logic
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 400;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Hard-coded rain parameters
    const RAIN_CONFIG = {
      dropCount: 2000,     // Number of raindrops
      speed: 0.5,           // Speed of raindrops (lower = slower)
      wind: 0.2,           // Wind direction and strength (negative = left, positive = right)
      dropSize: 1.5,      // Size of the raindrops
    };
    
    // Create raindrops array
    let raindrops = [];
    
    // Lightning variables
    let lightningAlpha = 0;
    let lastLightning = 0;
    
    class Raindrop {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -Math.random() * 150;
        this.size = Math.random() * RAIN_CONFIG.dropSize + 0.5;
        this.speed = (Math.random() * 5 + 15) * (RAIN_CONFIG.speed / 10);
        this.wind = Math.random() * RAIN_CONFIG.wind;
        this.length = this.speed * 1.5;
        this.opacity = Math.random() * 0.3 + 0.4; // Slightly more transparent to match light background
      }
      
      update() {
        this.y += this.speed;
        this.x += this.wind;
        
        // Reset if out of bounds
        if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
          this.reset();
        }
      }
      
      draw() {
        // Calculate fade effect based on proximity to top and bottom
        let fadeOpacity = this.opacity;
        
        // Start fading in when within 10% of the top
        const fadeInDistance = canvas.height * 0.1;
        if (this.y < fadeInDistance) {
          // Calculate fade-in factor (0 at top, 1.0 at fade end)
          const fadeInFactor = this.y / fadeInDistance;
          fadeOpacity = this.opacity * fadeInFactor;
        }
        
        // Start fading out when within 15% of the bottom
        const fadeOutDistance = canvas.height * 0.15;
        if (this.y > canvas.height - fadeOutDistance) {
          // Calculate fade-out factor (1.0 at fade start, 0 at bottom)
          const fadeOutFactor = (canvas.height - this.y) / fadeOutDistance;
          fadeOpacity = this.opacity * fadeOutFactor;
        }
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.wind, this.y + this.length);
        // Use color similar to accent color but more visible on light background
        ctx.strokeStyle = `rgba(18, 52, 88, ${fadeOpacity})`;
        ctx.lineWidth = this.size;
        ctx.stroke();
        
        // Only show splash effect if not completely faded
        if (this.y > canvas.height - 10 && this.y < canvas.height && fadeOpacity > 0.1) {
          const splashOpacity = fadeOpacity * 0.75; // Make splash more subtle
          ctx.beginPath();
          ctx.arc(this.x, canvas.height, this.size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(18, 52, 88, ${splashOpacity})`;
          ctx.fill();
        }
      }
    }
    
    // Initialize raindrops
    function initRaindrops() {
      raindrops = [];
      for (let i = 0; i < RAIN_CONFIG.dropCount; i++) {
        raindrops.push(new Raindrop());
      }
    }
    
    // Create occasional lightning effect - disable on light background
    function createLightning() {
      // Disabled for light background
      return;
    }
    
    // Animation loop
    function animate() {
      // Clear with a background matching the website
      ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // White background to match website
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw raindrops
      raindrops.forEach(drop => {
        drop.update();
        drop.draw();
      });
      
      requestAnimationFrame(animate);
    }
    
    // Initialize and start animation
    initRaindrops();
    animate();
    
    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Set up global scroll event handler to scroll the about-content
  useEffect(() => {
    const handleGlobalScroll = (e) => {
      // Skip if not in desktop view
      if (window.innerWidth <= 768) return;
      
      // Use the wheel delta to scroll the about-content
      const aboutContent = aboutContentRef.current;
      if (aboutContent) {
        // Prevent default to stop page scrolling
        e.preventDefault();
        
        // Determine scroll amount from wheel delta
        const scrollAmount = e.deltaY || e.detail || e.wheelDelta;
        
        // Apply scroll to about-content
        aboutContent.scrollTop += scrollAmount > 0 ? 40 : -40;
      }
    };
    
    // Add wheel event listener
    window.addEventListener('wheel', handleGlobalScroll, { passive: false });
    
    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('wheel', handleGlobalScroll);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <div className="container">
        <nav>
          <ul>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#investments" onClick={(e) => handleNavClick(e, 'investments')}>Investments</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="#interests" onClick={(e) => handleNavClick(e, 'interests')}>Interests</a></li>
          </ul>
        </nav>
        
        <div className="about-content" ref={aboutContentRef}>
          <section id="about">
            <p>
              I am a CS student at Georgia Tech specializing in Artificial Intelligence and System Architecture. 
              Particularly passionate about finance and emerging technology, with a strong focus on developing 
              algorithmic trading strategies powered by machine learning.
            </p>
            <p>
              Outside of coding, I appreciate nature through exercising, sightseeing, and snowboarding. 
              I enjoy staying active, trying new restaurants, and exploring new hobbies/interests. 
              I also enjoy poker and chess.
            </p>

            <p>
              If you want to get in touch, please reach out via email or connect with me on LinkedIn.
            </p>
          </section>
          
          <section id="investments">
            <div className="category">
              <h2>Investments <span>↓</span></h2>
              <p>
                I angel invest in companies I find interesting. I wish to expand this to source my own deals and help founders.
              </p>
              <p>
                To achieve this goal, I am building a web agent to help students apply for jobs. 
              </p>
              <p>
                I manage my own equity portfolio. The companies listed were either invested in a seed round or series A.
              </p>
              <ul>
                <li><a href="https://writer.com/" target="_blank" rel="noopener noreferrer">Writer AI</a> - AI writing assistant platform</li>
                <li><a href="https://datafold.com" target="_blank" rel="noopener noreferrer">Datafold</a> - Data reliability platform</li>
              </ul>
            </div>
          </section>
          
          <section id="projects">
            <div className="category">
              <h2>ML & Finance <span>↓</span></h2>
              <ul>
                <li><a href="https://wlu314.github.io/CS4641/" target="_blank" rel="noopener noreferrer">Pairs Trading Strategy</a></li>
                <li>Market Sentiment Analysis Engine</li>
                <li><a href="https://kalshi.com/" target="_blank" rel="noopener noreferrer">Kalshi Latency Trading Bot</a></li>
                <li><a href="https://prosperity.imc.com/" target="_blank" rel="noopener noreferrer">IMC Prosperity 3</a></li>
              </ul>
            </div>
            
            <div className="category">
              <h2>System Architecture <span>↓</span></h2>
              <ul>
                <li>CS2110: Computer Organization and Programming</li>
                <li>CS2200: Computer Systems and Networks</li>
                <li>CS3210: Operating Systems Design</li>
                <li>GT Trading Club: FPGA Programming</li>
              </ul>
            </div>

            <div className="category">
              <h2>Apps & Websites<span>↓</span></h2>
              <ul>
                <li><a href="" target="_blank" rel="noopener noreferrer">MCP Server for Finance - Alpaca, yfinance, SEC APIs for investments</a></li>
                <li><a href="https://github.com/wlu03/ALPACA-MCP" target="_blank" rel="noopener noreferrer">Alpaca MCP Server - wrapping Alpaca API for trading automation</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer">MultiMCP - Orchestrate multiple MCP-compatible LLMs via unified web interface</a></li>
                <li><a href="https://useapply.ai" target="_blank" rel="noopener noreferrer">Apply AI - Web Agent for Job Applications</a></li>
                <li><a href="https://www.spindleapi.com/" target="_blank" rel="noopener noreferrer">Spindle: NoSQL Automation w/ LLM</a></li>
                <li><a href="https://github.com/wlu314/Spotify-Stats-Tool" target="_blank" rel="noopener noreferrer">Spotify Analytics Dashboard</a></li>
              </ul>
            </div>
            
            <div className="category">
              <h2>Research <span>↓</span></h2>
              <ul>
                <li><a href="https://vip.gatech.edu/teams/vvk" target="_blank" rel="noopener noreferrer">Automated Algorithmic Design</a></li>
                <li>GNN Surrogates for NAS</li>
                <li>Neural Network Optimization</li>
              </ul>
            </div>
          </section>
          
          <section id="skills">
            <div className="category">
              <h2>Technical Skills <span>↓</span></h2>
              <ul>
                <li>Java, JavaScript, TypeScript, SQL, C, C++, Python</li>
                <li>TensorFlow, PyTorch, NumPy, Pandas, Scikit-learn</li>
                <li>AWS, Docker, Kubernetes, Linux, Firebase, MongoDB, PostgreSQL</li>
                <li>Git, CI/CD, Agile methodologies</li>
              </ul>
            </div>
          </section>
          
          <section id="interests">
            <div className="category">
              <h2>Interests <span>↓</span></h2>
              <ul>
                <li>Snowboarding, Hiking, and Traveling</li>
                <li>GTO Poker and Strategy</li>
                <li>Casual Chess</li>
                <li>Exploring Different Cuisines</li>
              </ul>
            </div>
          </section>

        </div>
        
        <div className="canvas-container">
          <canvas ref={canvasRef} id="dynamicCanvas"></canvas>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-links">
          <a href="mailto:wesleylu@gatech.edu" className="footer-link">Email</a>
          <a href="https://x.com/wlu314" className="footer-link">X/Twitter</a>
          <a href="https://www.linkedin.com/in/-wesley-lu/" className="footer-link">LinkedIn</a>
          <a href="https://github.com/wlu314" className="footer-link">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
