import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const canvasRef = useRef(null);
  const aboutContentRef = useRef(null);
  
  useEffect(() => {
    // Canvas animation logic from the template
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth * 0.9;
      canvas.height = 400;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Generate particle system that resembles ASCII art
    const particles = [];
    const particleCount = 1800;
    
    // Define layers for more dynamic appearance
    const layers = [
      { chars: ['.', '·'], size: [2, 3], speed: 0.8, opacity: [0.1, 0.3] },
      { chars: [':', '-'], size: [3, 4], speed: 0.6, opacity: [0.2, 0.4] },
      { chars: ['=', '+'], size: [3, 5], speed: 0.4, opacity: [0.3, 0.5] },
      { chars: ['*', '#', '@'], size: [4, 6], speed: 0.2, opacity: [0.4, 0.7] }
    ];
    
    class Particle {
      constructor(layerIndex) {
        this.layerIndex = layerIndex || Math.floor(Math.random() * layers.length);
        this.layer = layers[this.layerIndex];
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        const charIndex = Math.floor(Math.random() * this.layer.chars.length);
        this.char = this.layer.chars[charIndex];
        this.size = this.layer.size[0] + Math.random() * (this.layer.size[1] - this.layer.size[0]);
        
        // More complex motion
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.1 + Math.random() * 0.3) * this.layer.speed;
        
        this.velocity = {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
        };
        
        this.life = 100 + Math.random() * 150;
        this.opacity = this.layer.opacity[0] + Math.random() * (this.layer.opacity[1] - this.layer.opacity[0]);
        
        // Use your color palette
        this.color = [
          '#123458', // Blue
          '#D4C9BE', // Beige
          '#030303'  // Black
        ][this.layerIndex % 3];
      }
      
      update() {
        // Add slight gravity/drift effect
        this.velocity.y += 0.002;
        
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.life -= 0.5;
        
        if (this.life <= 0 || 
          this.x < -10 || 
          this.x > canvas.width + 10 || 
          this.y < -10 || 
          this.y > canvas.height + 10) {
          this.reset();
        }
      }
      
      draw() {
        // Use hex color with opacity
        const alpha = Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = `${this.color}${alpha}`;
        ctx.font = `${this.size}px monospace`;
        ctx.fillText(this.char, this.x, this.y);
      }
    }
    
    // Create a more interesting geometric pattern
    function createParticleShape() {
      // Clear existing particles if any
      particles.length = 0;
      
      // Create a unique geometric pattern
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Multiple shapes combined
      
      // 1. Circular base
      for (let i = 0; i < particleCount * 0.5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 50 + Math.random() * 120;
        const layerIndex = Math.floor(radius / 40) % layers.length;
        
        const p = new Particle(layerIndex);
        p.x = centerX + Math.cos(angle) * radius;
        p.y = centerY + Math.sin(angle) * radius;
        
        // Adjust velocity for circular motion with varying speeds
        const orbitSpeed = 0.2 - (layerIndex * 0.05);
        p.velocity = {
          x: Math.cos(angle + Math.PI/2) * orbitSpeed,
          y: Math.sin(angle + Math.PI/2) * orbitSpeed
        };
        
        particles.push(p);
      }
      
      // 2. Horizontal infinity-like pattern
      for (let i = 0; i < particleCount * 0.3; i++) {
        const t = Math.random() * Math.PI * 2;
        const figure8X = Math.sin(t) * 100;
        const figure8Y = Math.sin(t * 2) * 50;
        
        const p = new Particle(3); // Use the densest layer
        p.x = centerX + figure8X;
        p.y = centerY + figure8Y;
        
        // Make it rotate
        const speed = 0.05 + Math.random() * 0.1;
        p.velocity = {
          x: -Math.sin(t * 2) * speed * 2,
          y: Math.sin(t) * speed * 2
        };
        
        particles.push(p);
      }
      
      // 3. Random accents and ambient particles
      for (let i = 0; i < particleCount * 0.2; i++) {
        const p = new Particle(Math.floor(Math.random() * 2));
        particles.push(p);
      }
    }
    
    function animate() {
      // Clear canvas with a nearly transparent background for trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      requestAnimationFrame(animate);
    }
    
    createParticleShape();
    animate();
    
    // Recreate shape on resize for responsiveness
    window.addEventListener('resize', () => {
      setTimeout(createParticleShape, 100);
    });
    
    // Set up global scroll event handler to scroll the about-content
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
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', () => {
        setTimeout(createParticleShape, 100);
      });
      window.removeEventListener('wheel', handleGlobalScroll);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <div className="container">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#investments">Investments</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#interests">Interests</a></li>
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
          </section>
          
          <section id="investments">
            <div className="category">
              <h2>Investments <span>↓</span></h2>
              <p>
                I angel invest in companies I find interesting. I wish to expand this to source my own deals and help founders. 
                To achieve this goal, I am building a web agent to help students apply for jobs. 
                The companies listed were either invested in a seed round or series A.
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
                <li><a href="https://github.com/wlu314/Spotify-Stats-Tool" target="_blank" rel="noopener noreferrer">Spotify Analytics Dashboard</a></li>
                <li><a href="https://useapply.ai" target="_blank" rel="noopener noreferrer">Apply AI: Web Agent for Job Applications</a></li>
                <li><a href="https://www.spindleapi.com/" target="_blank" rel="noopener noreferrer">Spindle: NoSQL Automation w/ LLM</a></li>
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
                <li>Poker Strategy</li>
                <li>Casual Chess</li>
                <li>Exploring Local Cuisine</li>
              </ul>
            </div>
          </section>
          
          {/* Add extra padding at the bottom for footer visibility */}
          <div style={{ height: '120px' }}></div>
        </div>
        
        <div className="canvas-container">
          <canvas ref={canvasRef} id="dynamicCanvas"></canvas>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-links">
          <a href="mailto:wesleylu@gatech.edu" className="footer-link">Email</a>
          <a href="https://x.com/wlu314" className="footer-link">X</a>
          <a href="https://www.linkedin.com/in/-wesley-lu/" className="footer-link">LinkedIn</a>
          <a href="https://github.com/wlu314" className="footer-link">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
