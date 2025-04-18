import React, {useState} from "react";
import { CheckboxContainer, HiddenCheckbox, CustomCheckbox, Label } from "./styles";

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
    <CheckboxContainer onClick={handleChange}>
      <HiddenCheckbox checked={checked} onChange={handleChange} />
      <CustomCheckbox checked={checked} />
      <Label>{label}</Label>
    </CheckboxContainer>
  );
};