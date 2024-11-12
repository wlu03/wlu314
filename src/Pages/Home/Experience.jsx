import React from 'react';

function Experience() {
  return (
    <div style={styles.container}>
      <div style={styles.timelineContainer}>
        <h1 style={styles.sectionTitle}>Education</h1>
        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <div style={styles.marker}></div>
            <div style={styles.card}>
              <p style={styles.date}>2022 - 2026</p>
              <h2 style={styles.cardTitle}>Georgia Institute of Technology</h2>
              <p style={styles.cardSubtitle}>Bachelor of Science in Computer Science</p>
              <p style={styles.cardDescription}>
                Thread in System & Architecture and Intelligence
              </p>
            </div>
          </div>
        </div>

        <h1 style={styles.sectionTitle}>Extracirrculars</h1>
        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <div style={styles.marker}></div>
            <div style={styles.card}>
              <p style={styles.date}></p>
              <h2 style={styles.cardTitle}>Automated Algorithm Design</h2>
              <p style={styles.cardSubtitle}>Undergraduate Machine Learning Reseacher</p>
              <p style={styles.cardDescription}>
              Accelerate NAS by developing surrogate models to predict network performance, reducing computational costs by approximating architecture evaluation across search spaces
              </p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <div style={styles.marker}></div>
            <div style={styles.card}>
              <p style={styles.date}></p>
              <h2 style={styles.cardTitle}>Trading Club at Georgia Tech</h2>
              <p style={styles.cardSubtitle}>Quantitative Research Analyst</p>
              <p style={styles.cardDescription}>
                Research low-cap cryptocurrency capturing alpha during high liquity movements, capturing assests in sudden liquidity gaps. 
              </p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <div style={styles.marker}></div>
            <div style={styles.card}>
              <p style={styles.date}>Summer 2023</p>
              <h2 style={styles.cardTitle}>CEISMC</h2>
              <p style={styles.cardSubtitle}>Summer Intern</p>
              <p style={styles.cardDescription}>
                Robotics bootcamp and activites for 20+ motivated high school students interested in Georgia Tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'start',
    paddingLeft: '20vw',
    backgroundColor: '#ffffff',  // White background
    color: '#333333',  // Dark text color for contrast
    fontFamily: 'Roboto, Arial, sans-serif',
    minHeight: '100vh',
  },
  timelineContainer: {
    maxWidth: '700px',
    padding: '1vw',  // Reduced padding
  },
  sectionTitle: {
    fontSize: '1.8vw',  // Smaller font size
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: '1.5vh',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '15px',  // Reduced padding for the timeline
    borderLeft: '1px solid #cccccc',  // Light gray vertical line
    marginBottom: '3vh',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '2vh',
  },
  marker: {
    width: '8px',  // Smaller marker size
    height: '8px',
    backgroundColor: '#333333',  // Dark circle marker color
    borderRadius: '50%',
    position: 'relative',
    left: '-20px',
    top: '8px',
  },
  card: {
    backgroundColor: '#ffffff',  
    color: '#333333',
    borderRadius: '6px',  
    padding: '0.8vw', 
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '550px',
    width: '100%',
  },
  date: {
    fontSize: '0.9vw',  
    color: '#666666',
    marginBottom: '0.4vh',
  },
  cardTitle: {
    fontSize: '1.2vw', 
    fontWeight: 'bold',
    color: '#333333', 
    marginBottom: '0.4vh',
  },
  cardSubtitle: {
    fontSize: '0.9vw', 
    fontStyle: 'italic',
    color: '#666666',
    marginBottom: '0.8vh',
  },
  cardDescription: {
    fontSize: '0.8vw',
    lineHeight: '1.5',
  },
};

export default Experience;
