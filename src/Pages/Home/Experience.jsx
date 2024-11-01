import React from 'react';

function Experience() {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Education & Experience.</h1>
        
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Education</h2>
          <div style={styles.educationHeader}>
            <img src="/img/gtlogo.png" alt="Georgia Tech Logo" style={styles.logo} />
            <p style={styles.institution}>Georgia Institute of Technology</p>
          </div>
          <div style={styles.educationDetails}>
            <p style={styles.degree}>B.S. Computer Science (System Architecture & Artificial Intelligence)</p>
            <p style={styles.coursework}><strong>Coursework:</strong> Systems & Networks, Computer Organization, Algorithm Design, Discrete Math, Algorithms & Data Structures, Object-Oriented Programming, Probability & Statistics, Machine Learning, Artifical Intelligence</p>
            <p style={styles.research}><strong>Research:</strong> Automated Algorithm Design to find surrogate models to speed up neural architecture search</p>
            <p style={styles.date}>Aug 2022–May 2026</p>
          </div>
        </section>
        
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Experience</h2>
          <p style={styles.paragraph}><strong>Georgia Tech, Automated Algorithm Design</strong><br />Undergraduate ML Researcher</p>
          <p style={styles.paragraph}><strong>Trading Club at Georgia Tech</strong><br />Quantitative Research Analyst</p>
          <p style={styles.paragraph}><strong>Center for Education Integrating Science, Mathematics, and Computing (CEISMC)</strong><br />Summer Day Intern</p>
          <p style={styles.paragraph}><strong>L&C Cabinetry</strong><br />Web Designer</p>
        </section>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
    padding: '20px',
    margin: '0 auto',
    color: '#333',
    fontFamily: 'Roboto, Arial, sans-serif',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  },
  textContainer: {
    flex: 1,
    marginRight: '40px',
    paddingLeft: '80px',
  },
  title: {
    fontSize: '80px',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  educationHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  institution: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  educationDetails: {
    maxWidth: '800px',
  },
  degree: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  coursework: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  research: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  date: {
    fontSize: '18px',
    fontStyle: 'italic',
    marginTop: '10px',
  },
  paragraph: {
    fontSize: '20px',
    lineHeight: '1.6',
    marginBottom: '15px',
    fontWeight: '400',
  },
};

export default Experience;
