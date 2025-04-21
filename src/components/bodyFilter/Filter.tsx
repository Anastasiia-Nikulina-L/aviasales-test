import styles from './Filter.module.css';

import { SideFilters } from "./SideFilters";
import { FilterButtons } from "./FilterButtons";
import { TicketCard } from './TicketCard';
import { ShowButton } from './ShowButton';

import { tickets } from '../../data/ticket';

export const Filter = () => {
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox changed:', checked);
  };

  //TODO добавить уникальные лейблы из списка всех билетов
  return (
    <div className={styles.filterWrapper}>
        <SideFilters onCheckboxChange={handleCheckboxChange}/>
        <div className={styles.ticketsWrapper}>
          <FilterButtons />
          {tickets.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} />
          ))}
          <ShowButton></ShowButton>
        </div>
    </div>
  );
};