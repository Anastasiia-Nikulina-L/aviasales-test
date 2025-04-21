import React, {useState} from "react";
import styles from './SideFilters.module.css'

type CheckboxWithLabelProps = {
  label: string;
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  label,
  initialChecked = false,
  onChange,
}) => {
  
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div className={styles.checkboxContainer} onClick={handleChange}>
      <input
        type="checkbox"
        className={styles.hiddenCheckbox}
        checked={checked}
        onChange={handleChange}
      />
      <div className={`${styles.customCheckbox} ${checked ? styles.customCheckboxChecked : ''}`} />
      <span className={styles.label}>{label}</span>
    </div>
  );
};

type SideFiltersProps = {
  onCheckboxChange: (checked: boolean) => void;
}

export const SideFilters: React.FC<SideFiltersProps> = ({ onCheckboxChange }) => {
  return (
    <div className={styles.sideFilters}>
      <div className={styles.filterTitle}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <CheckboxWithLabel
        label="Все"
        initialChecked={false}
        onChange={onCheckboxChange}
      />
      <CheckboxWithLabel
        label="Без пересадок"
        initialChecked={false}
        onChange={onCheckboxChange}
      />
      <CheckboxWithLabel
        label="1 пересадка"
        initialChecked={false}
        onChange={onCheckboxChange}
      />
    </div>
  );
};