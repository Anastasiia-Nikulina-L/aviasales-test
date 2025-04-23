import { useState, useEffect, useCallback } from 'react';
import styles from './Filter.module.css';
import { SideFilters } from "../SideFilters/SideFilters";
import { TicketSortButtons, TicketSortType } from '../TicketSort/TicketSortButtons';
import { TicketCard } from '../TicketCard/TicketCard';
import { BigBlueButton } from '../../../ui/buttons/BigBlueButton/BigBlueButton';
import { tickets, Ticket } from '../../../data/ticket';
import { sortTickets } from '../TicketSort/TicketSort';

export const Filter = () => {
  const [activeSort, setActiveSort] = useState<TicketSortType>('cheapest');
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [stopsFilters, setStopsFilters] = useState<number[]>([]);
  const [filteredAndSortedTickets, setFilteredAndSortedTickets] = useState<Ticket[]>([]);

  const handleFilterChange = useCallback((selectedStops: number[]) => {
    setStopsFilters(selectedStops);
    setVisibleCount(5);
  }, []);

  const handleSortChange = useCallback((sortType: 'cheapest' | 'fastest' | 'optimal') => {
    setActiveSort(sortType);
    setVisibleCount(5);
  }, []);

  const showMoreTickets = useCallback(() => {
    setVisibleCount(prev => prev + 5);
  }, []);

  useEffect(() => {
    let result = [...tickets];
    
    if (stopsFilters.length > 0) {
      result = result.filter(ticket => 
        ticket.segments.every(segment => stopsFilters.includes(segment.stops.length)));
    }
    
    setFilteredAndSortedTickets(sortTickets(result, activeSort));
  }, [stopsFilters, activeSort]);

  const shouldShowButton = visibleCount < filteredAndSortedTickets.length;

  return (
    <div className={styles.filterWrapper}>
      <SideFilters onFilterChange={handleFilterChange} />
      <div className={styles.ticketsWrapper}>
        <TicketSortButtons 
          activeSort={activeSort}
          onSortChange={handleSortChange}
        />
        
        {filteredAndSortedTickets.slice(0, visibleCount).map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
        
        {shouldShowButton && (
          <BigBlueButton onClick={showMoreTickets}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </BigBlueButton>
        )}
      </div>
    </div>
  );
};