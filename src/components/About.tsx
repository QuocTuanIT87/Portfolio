import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.textBlock}>
          <p className={styles.para}>
            I am a software developer with a passion for creating useful, reliable, and impactful technology solutions. My work goes beyond simply writing lines of code; it involves researching, analyzing, and solving problems efficiently to deliver high-quality software.
          </p>
          <p className={styles.para}>
            I believe that great software is built on dedication, responsibility, and attention to detail. Therefore, in every project I undertake, I focus on every aspect of development—from system design and performance optimization to user experience. Every line of code is written with care, maintainability, and long-term sustainability in mind.
          </p>
          <p className={styles.para}>
            For me, software development is more than just a profession; it is a commitment to delivering trustworthy technology solutions that help clients and businesses achieve their goals. I take pride in building products that not only meet requirements but also provide lasting value to those who use them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
