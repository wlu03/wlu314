import React from 'react';

function Experience() {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>education & experience.</h1>
        
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Education</h2>
          <p style={styles.paragraph}>Bachelor of Science in Computer Science, Mathematics</p>
          <ul style={styles.list}>
            <li>Threads: Artificial Intelligence & System Architecture</li>
          </ul>
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
  paragraph: {
    fontSize: '30px',
    lineHeight: '1.6',
    marginBottom: '15px',
    fontWeight: '400',
  },
  list: {
    fontSize: '30px',
    lineHeight: '1.6',
    marginBottom: '15px',
    paddingLeft: '40px',
    listStyleType: 'disc',
  },
};

export default Experience;

