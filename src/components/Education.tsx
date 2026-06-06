import React from 'react';
import SectionTitle from './SectionTitle';
import styles from './Education.module.css';

const Education: React.FC = () => {
  return (
    <section className={styles.section} id="education">
      <div className="container">
        <div style={{ marginBottom: '2.5rem' }}>
          <SectionTitle>Education</SectionTitle>
        </div>
        <div className={styles.card}>
          <div className={styles.cardLeft}>
            <span className={styles.period}>2019 — 2023</span>
          </div>
          <div className={styles.cardRight}>
            <h3 className={styles.school}>Posts and Telecommunications Institute of Technology</h3>
            <p className={styles.degree}>Bachelor of Information Technology</p>
            <p className={styles.location}>Ho Chi Minh City, Vietnam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
