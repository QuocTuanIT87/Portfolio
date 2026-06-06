import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  const { ref, state } = useScrollReveal({ threshold: 0.3 });

  return (
    <div ref={ref} className={styles.wrapper}>
      <h2
        className={[
          'section-title',
          state === 'animating' ? 'animate-wave' : '',
          state === 'visible-static' ? 'visible-static' : '',
          state === 'hidden' ? styles.hidden : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
