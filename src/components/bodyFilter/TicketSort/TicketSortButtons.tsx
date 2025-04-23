import React from 'react';
import { HorizontalTab } from '../../../ui/tabs/HorizontalTab/HorizontalTab';

export type TicketSortType = 'cheapest' | 'fastest' | 'optimal';

const TICKET_SORT_OPTIONS = [
  { type: 'cheapest', text: 'САМЫЙ ДЕШЕВЫЙ' },
  { type: 'fastest', text: 'САМЫЙ БЫСТРЫЙ' },
  { type: 'optimal', text: 'ОПТИМАЛЬНЫЙ' },
] as const;

interface TicketSortButtonsProps {
  activeSort: TicketSortType;
  onSortChange: (sortType: TicketSortType) => void;
}

export const TicketSortButtons: React.FC<TicketSortButtonsProps> = ({
  activeSort,
  onSortChange,
}) => {
  return (
    <HorizontalTab
      options={TICKET_SORT_OPTIONS}
      activeType={activeSort}
      onTypeChange={onSortChange}
    />
  );
};