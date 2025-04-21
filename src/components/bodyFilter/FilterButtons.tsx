import React from 'react';
import styles from './FilterButtons.module.css';

type SortType = 'cheapest' | 'fastest' | 'optimal';

interface FilterButtonsProps {
  activeSort: SortType;
  onSortChange: (sortType: SortType) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ activeSort, onSortChange }) => {
  const buttons = [
    { type: 'cheapest', text: 'САМЫЙ ДЕШЕВЫЙ' },
    { type: 'fastest', text: 'САМЫЙ БЫСТРЫЙ' },
    { type: 'optimal', text: 'ОПТИМАЛЬНЫЙ' },
  ] as const;

  const getActiveIndex = () => {
    return buttons.findIndex(button => button.type === activeSort);
  };

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button, index) => (
        <button
          key={button.type}
          className={`${styles.button} ${getActiveIndex() === index ? styles.active : ''}`}
          onClick={() => onSortChange(button.type)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};