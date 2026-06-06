import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import styles from "./Technologies.module.css";

interface Tech {
  name: string;
  icon: string;
  bg: string;
  iconStyle?: React.CSSProperties;
}

const techs: Tech[] = [
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    bg: "#0D1B2A",
  },
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    bg: "#0D1F0D",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    bg: "#0A1929",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    bg: "#1A1300",
  },
  {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    bg: "#0D1B2A",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    bg: "#0A1A0A",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    bg: "#001C30",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    bg: "#111111",
    iconStyle: { filter: "invert(1)" },
  },
];

const Technologies: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: dir === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.section} id="technologies">
      {/* Title */}
      <div className={styles.titleArea}>
        <SectionTitle>I use tech</SectionTitle>
      </div>

      {/* Scrollable tech cards */}
      <div className={styles.track} ref={trackRef}>
        {techs.map((tech) => (
          <div
            key={tech.name}
            className={styles.card}
            id={`tech-${tech.name.toLowerCase().replace(/\s/g, "-")}`}
            style={{ background: tech.bg }}
          >
            <div className={styles.iconArea}>
              <img
                src={tech.icon}
                alt={tech.name}
                className={styles.icon}
                style={tech.iconStyle}
              />
            </div>
            <div className={styles.cardBottom}>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Nav buttons BELOW cards — dark bar with golden circles */}
      <div className={styles.navBar}>
        <button
          onClick={() => scroll("left")}
          className={styles.navBtn}
          id="tech-scroll-left"
          aria-label="Scroll left"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className={styles.navBtn}
          id="tech-scroll-right"
          aria-label="Scroll right"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12h14"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Technologies;
