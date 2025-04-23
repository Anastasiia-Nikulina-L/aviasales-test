import React from 'react';
import styles from './BigBlueButton.module.css';

interface BigBlueButtonProps {
  onClick: () => void;
  children? : string;
}

export const BigBlueButton: React.FC<BigBlueButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.BigBlueButton} onClick={onClick}>
        {children}
    </button>
  );
};