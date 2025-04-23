import styles from './Checkbox.module.css'

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  
  return (
    <div className={styles.checkboxContainer} onClick={() => onChange?.(!checked)}>
      <input
        type="checkbox"
        className={styles.hiddenCheckbox}
        checked={checked}
        onChange={() => onChange?.(!checked)}
      />
      <div className={`${styles.customCheckbox} ${checked ? styles.customCheckboxChecked : ''}`} />
      <span className={styles.label}>{label}</span>
    </div>
  );
};