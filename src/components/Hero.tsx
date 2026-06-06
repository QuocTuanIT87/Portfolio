import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
      setDate(
        now
          .toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
          .toUpperCase(),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Left: Info panel */}
      <div className={styles.left}>
        <div className={styles.topRow}>
          <div className={styles.initials}>QT</div>
          <p className={styles.tagline}>
            Design apps and websites
            <br />
            to meet your needs.
          </p>
        </div>

        <h1 className={styles.name}>
          <span className={styles.nameLine}>QUOC</span>
          <span className={styles.nameLine}>TUAN</span>
          <span className={styles.badge87}>87</span>
        </h1>

        <div className={styles.bottomMeta}>
          <span className={styles.metaItem}>HO CHI MINH CITY</span>
          <span className={styles.metaItem}>{date}</span>
          <span className={styles.metaItem}>{time}</span>
        </div>
      </div>

      {/* Right: Full-bleed photo */}
      <div ref={imageRef} className={styles.right}>
        <img
          src="/profile.jpg"
          alt="Quoc Tuan 87 – Software Developer"
          className={styles.photo}
        />
      </div>
    </section>
  );
};

export default Hero;
