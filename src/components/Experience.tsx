import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const [openApp, setOpenApp] = useState(true);
  const [openWebMgmt, setOpenWebMgmt] = useState(false);
  const [openWebProd, setOpenWebProd] = useState(false);

  return (
    <section className={styles.section} id="experience">
      <div className="container">
        <div style={{ marginBottom: '2.5rem' }}>
          <SectionTitle>Work Experience</SectionTitle>
        </div>

        <div className={styles.jobCard}>
          <div className={styles.jobHeader}>
            <div>
              <h3 className={styles.company}>AI EBIKE — Smart Electric Vehicle Technology</h3>
              <p className={styles.period}>Jun 24, 2024 — Sep 1, 2026 · 2 years</p>
              <p className={styles.position}>Application Architecture Design · React Native &amp; Website from scratch</p>
            </div>
          </div>

          {/* App Project */}
          <div className={styles.projectBlock}>
            <button
              className={styles.projectToggle}
              onClick={() => setOpenApp(!openApp)}
              id="toggle-app-project"
              aria-expanded={openApp}
            >
              <span className={styles.projectLabel}>📱 App: AI EBIKE</span>
              <span className={styles.arrow}>{openApp ? '▲' : '▼'}</span>
            </button>
            {openApp && (
              <div className={styles.projectDetails}>
                <p className={styles.projectDesc}>
                  A smart electric vehicle companion app with 4 core feature groups:
                </p>
                <div className={styles.featureGrid}>
                  <div className={styles.featureCard}>
                    <span className={styles.featureIcon}>🔐</span>
                    <strong>Smart Lock/Unlock</strong>
                    <ul>
                      <li>Remote lock/unlock via app</li>
                      <li>Automatic lock/unlock</li>
                    </ul>
                  </div>
                  <div className={styles.featureCard}>
                    <span className={styles.featureIcon}>📍</span>
                    <strong>GPS Tracking</strong>
                    <ul>
                      <li>Real-time GPS tracking</li>
                      <li>Journey history</li>
                      <li>Vehicle disable remotely</li>
                    </ul>
                  </div>
                  <div className={styles.featureCard}>
                    <span className={styles.featureIcon}>🛡️</span>
                    <strong>E-Warranty</strong>
                    <ul>
                      <li>Electronic warranty activation</li>
                      <li>Points & rewards system</li>
                    </ul>
                  </div>
                  <div className={styles.featureCard}>
                    <span className={styles.featureIcon}>🔋</span>
                    <strong>Battery & Rental</strong>
                    <ul>
                      <li>Battery health management</li>
                      <li>Electric vehicle rental</li>
                      <li>Bao Kim payment integration</li>
                    </ul>
                  </div>
                </div>
                <p className={styles.role}>
                  <strong>Role:</strong> Led full-stack development of all app features from scratch (AI-assisted)
                </p>
              </div>
            )}
          </div>

          {/* Management Website */}
          <div className={styles.projectBlock}>
            <button
              className={styles.projectToggle}
              onClick={() => setOpenWebMgmt(!openWebMgmt)}
              id="toggle-web-mgmt"
              aria-expanded={openWebMgmt}
            >
              <span className={styles.projectLabel}>🌐 Management Website</span>
              <span className={styles.arrow}>{openWebMgmt ? '▲' : '▼'}</span>
            </button>
            {openWebMgmt && (
              <div className={styles.projectDetails}>
                <p className={styles.projectDesc}>Back-office web platform for business operations:</p>
                <ul className={styles.featureList}>
                  <li>Electronic warranty management</li>
                  <li>Vehicle rental management</li>
                  <li>Inventory / warehouse management</li>
                  <li>Account management, dealer network, role-based permissions, warranty approval, points approval</li>
                </ul>
              </div>
            )}
          </div>

          {/* Production Website */}
          <div className={styles.projectBlock}>
            <button
              className={styles.projectToggle}
              onClick={() => setOpenWebProd(!openWebProd)}
              id="toggle-web-prod"
              aria-expanded={openWebProd}
            >
              <span className={styles.projectLabel}>🏭 Production Management Website</span>
              <span className={styles.arrow}>{openWebProd ? '▲' : '▼'}</span>
            </button>
            {openWebProd && (
              <div className={styles.projectDetails}>
                <p className={styles.projectDesc}>
                  Internal system to monitor and optimize manufacturing efficiency:
                </p>
                <ul className={styles.featureList}>
                  <li>Track production performance, progress, and output quality</li>
                  <li>Monitor individual employee productivity in real time</li>
                  <li>Generate reports and analytics for production optimization</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
