import React, {useState} from "react";

import { FilterWrapper, SideFilters, CheckboxContainer, HiddenCheckbox, CustomCheckbox, Label } from "./styles";


export const Filter = () => {
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox changed:', checked);
  };

  //TODO добавить уникальные лейблы из списка всех билетов
  return (
    <FilterWrapper>
        <SideFilters>
          <div style={{  fontWeight: 600, letterSpacing: "0.5px", fontSize: "12px", lineHeight: "12px", padding: "0 20px 10px 20px" }}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
          <CheckboxWithLabel        
          label="Все" 
          initialChecked={false}
          onChange={handleCheckboxChange} />
          <CheckboxWithLabel        
          label="Без пересадок" 
          initialChecked={false}
          onChange={handleCheckboxChange} />
          <CheckboxWithLabel        
          label="1 пересадка" 
          initialChecked={false}
          onChange={handleCheckboxChange} />
        </SideFilters>
    </FilterWrapper>
  );
};






type CheckboxWithLabelProps = {
  label: string;
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
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