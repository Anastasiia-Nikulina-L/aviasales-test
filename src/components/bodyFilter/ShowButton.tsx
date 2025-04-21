import React from 'react';
import styles from './ShowButton.module.css';

interface ShowButtonProps {
  onClick: () => void;
}

export const ShowButton: React.FC<ShowButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.showButton} onClick={onClick}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
};