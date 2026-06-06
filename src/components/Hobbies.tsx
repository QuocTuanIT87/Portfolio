import React from "react";
import SectionTitle from "./SectionTitle";
import styles from "./Hobbies.module.css";

const hobbies = [
  {
    name: "Bamboo Flute",
    subtitle: "Sáo Trúc",
    img: "/hobby_flute.png",
    label: "MUSIC · TRADITIONAL",
  },
  {
    name: "Guitar",
    subtitle: "Acoustic",
    img: "/hobby_guitar.png",
    label: "MUSIC · STRINGS",
  },
  {
    name: "League of Legends",
    subtitle: "Online Gaming",
    img: "/hobby_lol.png",
    label: "GAME · MOBA",
  },
  {
    name: "Strategy Origins",
    subtitle: "Strategy Game",
    img: "/hobby_strategy.png",
    label: "GAME · STRATEGY",
  },
];

const Hobbies: React.FC = () => {
  return (
    <section className={styles.section} id="hobbies">
      <div className={styles.titleArea}>
        <SectionTitle>Hobbies &amp; Interests</SectionTitle>
      </div>

      <div className={styles.grid}>
        {hobbies.map((hobby) => (
          <div
            key={hobby.name}
            className={styles.cardWrapper}
            id={`hobby-${hobby.name.toLowerCase().replace(/\s/g, "-")}`}
          >
            <div className={styles.card}>
              <img src={hobby.img} alt={hobby.name} className={styles.img} />
            </div>
            <div className={styles.meta}>
              <span className={styles.hobbyName}>
                {hobby.name.toUpperCase()}
              </span>
              <span className={styles.label}>{hobby.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
