import styles from './Filter.module.css';

import { SideFilters } from "./SideFilters";
import { FilterButtons } from "./FilterButtons";

export const Filter = () => {
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox changed:', checked);
  };

  //TODO добавить уникальные лейблы из списка всех билетов
  return (
    <div className={styles.filterWrapper}>
        <SideFilters onCheckboxChange={handleCheckboxChange}/>
        <>
          <FilterButtons />
        </>
    </div>
  );
};