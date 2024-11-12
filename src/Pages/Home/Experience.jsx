import React from 'react';

function Experience() {
  return (
    <div style={styles.container}>
      <div style={styles.timelineContainer}>
        <h1 style={styles.sectionTitle}>Education</h1>
        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <div style={styles.marker}></div>
            <div style={{ ...styles.card, ...styles.cardHover }}>
              <p style={styles.date}>2022 - 2026</p>
              <h2 style={styles.cardTitle}>Georgia Institute of Technology</h2>
              <p style={styles.cardSubtitle}>Bachelor of Science in Computer Science</p>
              <p style={styles.cardDescription}>
                Thread in System & Architecture and Intelligence
              </p>
            </div>
          </div>
        </div>

        <h1 style={styles.sectionTitle}>Extracurriculars</h1>
        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <div style={styles.marker}></div>
            <div style={{ ...styles.card, ...styles.cardHover }}>
              <p style={styles.date}></p>
              <h2 style={styles.cardTitle}>Automated Algorithm Design</h2>
              <p style={styles.cardSubtitle}>Undergraduate Machine Learning Researcher</p>
              <p style={styles.cardDescription}>
                Accelerate NAS by developing surrogate models to predict network performance, reducing computational costs by approximating architecture evaluation across search spaces.
              </p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <div style={styles.marker}></div>
            <div style={{ ...styles.card, ...styles.cardHover }}>
              <p style={styles.date}></p>
              <h2 style={styles.cardTitle}>Trading Club at Georgia Tech</h2>
              <p style={styles.cardSubtitle}>Quantitative Research Analyst</p>
              <p style={styles.cardDescription}>
                Research low-cap cryptocurrency capturing alpha during high liquidity movements, capturing assets in sudden liquidity gaps.
              </p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <div style={styles.marker}></div>
            <div style={{ ...styles.card, ...styles.cardHover }}>
              <p style={styles.date}>Summer 2023</p>
              <h2 style={styles.cardTitle}>CEISMC</h2>
              <p style={styles.cardSubtitle}>Summer Intern</p>
              <p style={styles.cardDescription}>
                Robotics bootcamp and activities for 20+ motivated high school students interested in Georgia Tech.
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
    paddingLeft: '20rem',
    backgroundColor: '#ffffff',
    color: '#333333',
    fontFamily: 'Roboto, Arial, sans-serif',
    minHeight: '80rem',
  },
  timelineContainer: {
    maxWidth: '700px',
    padding: '1.5rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: '1.5rem',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '18px',
    borderLeft: '2px solid #cccccc',
    marginBottom: '3rem',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '2.5rem',
  },
  marker: {
    width: '10px',
    height: '10px',
    backgroundColor: '#333333',
    borderRadius: '50%',
    position: 'relative',
    left: '-20px',
    top: '8px',
  },
  card: {
    backgroundColor: '#ffffff',
    color: '#333333',
    borderRadius: '6px',
    padding: '1rem',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '550px',
    width: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  cardHover: {
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
    },
  },
  date: {
    fontSize: '1rem',
    color: '#666666',
    marginBottom: '0.6rem',
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: '0.6rem',
  },
  cardSubtitle: {
    fontSize: '1rem',
    fontStyle: 'italic',
    color: '#666666',
    marginBottom: '1rem',
  },
  cardDescription: {
    fontSize: '0.9rem',
    lineHeight: '1.8',
  },
};

export default Experience;
