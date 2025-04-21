import React, { useState } from 'react';
import styles from './FilterButtons.module.css';

export const FilterButtons: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const buttons = ['САМЫЙ ДЕШЕВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ'];

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((text, index) => (
        <button
          key={index}
          className={`${styles.button} ${activeButton === index ? styles.active : ''}`}
          onClick={() => setActiveButton(index)}
        >
          {text}
        </button>
      ))}
    </div>
  );
};