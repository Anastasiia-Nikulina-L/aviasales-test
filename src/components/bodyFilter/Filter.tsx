import { useState, useEffect, useCallback } from 'react';
import styles from './Filter.module.css';

import { SideFilters } from "./SideFilters";
import { FilterButtons } from "./FilterButtons";
import { TicketCard } from './TicketCard';
import { ShowButton } from './ShowButton';

import { tickets, Ticket } from '../../data/ticket';

export const Filter = () => {
  const [activeSort, setActiveSort] = useState<'cheapest' | 'fastest' | 'optimal'>('cheapest');
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
      result = result.filter(ticket => {
        return ticket.segments.every(segment => 
          stopsFilters.includes(segment.stops.length)
        );
      });
    }

    switch (activeSort) {
      case 'cheapest':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'fastest':
        result.sort((a, b) => {
          const durationA = a.segments[0].duration + a.segments[1].duration;
          const durationB = b.segments[0].duration + b.segments[1].duration;
          return durationA - durationB;
        });
        break;
      case 'optimal':
        //TODO настроить оптимальную сортировку
        result.sort((a, b) => a.price - b.price); 
        break;
    }
    
    setFilteredAndSortedTickets(result);
  }, [stopsFilters, activeSort]);

  const shouldShowButton = visibleCount < filteredAndSortedTickets.length;

  return (
    <div className={styles.filterWrapper}>
      <SideFilters onFilterChange={handleFilterChange}/>
      <div className={styles.ticketsWrapper}>
        <FilterButtons 
          activeSort={activeSort} 
          onSortChange={handleSortChange}
        />
        
        {filteredAndSortedTickets.slice(0, visibleCount).map((ticket, index) => (
          <TicketCard 
            key={index} 
            ticket={ticket} 
          />
        ))}
        
        {shouldShowButton && (
          <ShowButton onClick={showMoreTickets} />
        )}
      </div>
    </div>
  );
};