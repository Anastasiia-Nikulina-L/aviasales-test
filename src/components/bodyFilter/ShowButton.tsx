import React from 'react';
import styles from './ShowButton.module.css';

export const ShowButton: React.FC = () => {
  return (
    <button className={styles.showButton}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
};