import React from 'react';
import SectionTitle from './SectionTitle';
import styles from './Learning.module.css';

const Learning: React.FC = () => {
  const topics = ['CI/CD', 'AWS'];

  return (
    <section className={styles.section} id="learning">
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <SectionTitle>Currently Learning</SectionTitle>
        </div>
        <div className={styles.tags}>
          {topics.map((topic) => (
            <div key={topic} className={styles.tag} id={`learning-${topic.toLowerCase()}`}>
              <span className={styles.dot} />
              {topic}
            </div>
          ))}
        </div>
        <p className={styles.note}>
          Actively expanding knowledge in cloud infrastructure and modern DevOps practices.
        </p>
      </div>
    </section>
  );
};

export default Learning;
