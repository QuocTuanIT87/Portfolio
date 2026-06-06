import React from "react";
import SectionTitle from "./SectionTitle";
import styles from "./Languages.module.css";

const Languages: React.FC = () => {
  return (
    <section className={styles.section} id="languages">
      <div className="container">
        <div style={{ marginBottom: "2.5rem" }}>
          <SectionTitle>Languages</SectionTitle>
        </div>
        <div className={styles.card}>
          <div className={styles.flagWrapper}>
            <span className={styles.flag}>🇬🇧</span>
          </div>
          <div className={styles.info}>
            <h3 className={styles.langName}>English</h3>
            <p className={styles.langDesc}>
              Listening · Speaking · Reading technical documentation
            </p>
            <div className={styles.skillBars}>
              {[
                { label: "Reading", value: 100 },
                { label: "Listening", value: 100 },
                { label: "Speaking", value: 100 },
              ].map(({ label, value }) => (
                <div key={label} className={styles.skillRow}>
                  <span className={styles.skillLabel}>{label}</span>
                  <div className={styles.barTrack}>
                    <div
                      className={styles.barFill}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <span className={styles.skillPct}>{value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
