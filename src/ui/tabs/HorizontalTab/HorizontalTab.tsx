import styles from "./HorizontalTab.module.css";

export interface HorizontalTabOption<T extends string> {
  type: T;
  text: string;
}

interface HorizontalTabProps<T extends string> {
  options: readonly HorizontalTabOption<T>[];
  activeType: T;
  onTypeChange: (type: T) => void;
}

export const HorizontalTab = <T extends string>({
  options,
  activeType,
  onTypeChange,
}: HorizontalTabProps<T>) => {
  return (
    <div className={styles.buttonContainer}>
      {options.map((option) => (
        <button
          key={option.type}
          className={`${styles.button} ${
            activeType === option.type ? styles.active : ""
          }`}
          onClick={() => onTypeChange(option.type)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};
