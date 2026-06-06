import React from 'react';
import SectionTitle from './SectionTitle';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <div style={{ marginBottom: '2.5rem' }}>
          <SectionTitle>Personal Projects</SectionTitle>
        </div>
        <div className={styles.comingSoon}>
          <div className={styles.comingInner}>
            <span className={styles.comingIcon}>🚀</span>
            <h3 className={styles.comingTitle}>Coming Soon</h3>
            <p className={styles.comingText}>
              Personal projects are being prepared and will be showcased here soon.
              Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
