import { FilterWrapper, SideFilters,} from "./styles";
import { CheckboxWithLabel } from "./SideFilters";
import { FilterButtons } from "./FilterButtons";

export const Filter = () => {
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox changed:', checked);
  };

  //TODO добавить уникальные лейблы из списка всех билетов
  return (
    <FilterWrapper>
        <SideFilters>
          <div style={{  fontWeight: 600, letterSpacing: "0.5px", lineHeight: "12px", padding: "0 20px 10px 20px" }}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
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
        <>
          <FilterButtons />
        </>
    </FilterWrapper>
  );
};