import React from "react";
import SectionTitle from "./SectionTitle";
import styles from "./Sports.module.css";

const sports = [
  {
    name: "Badminton",
    category: "RACKET SPORT",
    img: "/sport_badminton.png",
    emoji: "🏸",
  },
  {
    name: "Football",
    category: "TEAM SPORT",
    img: "/sport_football.png",
    emoji: "⚽",
  },
  {
    name: "Chess",
    category: "MIND SPORT",
    img: "/sport_chess.png",
    emoji: "♟️",
  },
  {
    name: "Swimming",
    category: "WATER SPORT",
    img: "/sport_swimming.png",
    emoji: "🏊",
  },
];

const Sports: React.FC = () => {
  return (
    <section className={styles.section} id="sports">
      <div className={styles.titleArea}>
        <SectionTitle>I love sports </SectionTitle>
      </div>

      <div className={styles.grid}>
        {sports.map((sport, i) => (
          <div
            key={sport.name}
            className={styles.cardWrapper}
            style={{ marginTop: i % 2 === 1 ? "2.5rem" : "0" }}
          >
            <div
              className={styles.card}
              id={`sport-${sport.name.toLowerCase()}`}
            >
              <img src={sport.img} alt={sport.name} className={styles.img} />
              <div className={styles.overlay} />
              <div className={styles.badge}>{sport.emoji} MY FAVOURITE</div>
            </div>
            <div className={styles.meta}>
              <span className={styles.sportName}>
                {sport.name.toUpperCase()}
              </span>
              <span className={styles.category}>{sport.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sports;
