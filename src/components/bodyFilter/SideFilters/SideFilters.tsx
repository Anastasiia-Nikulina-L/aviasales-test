import React, { useState, useEffect } from "react";
import styles from "./SideFilters.module.css";
import { tickets } from "../../../data/ticket";
import { Checkbox } from "../../../ui/checkbox/Checkbox";

interface SideFiltersProps {
  onFilterChange: (filters: number[]) => void;
}

export const SideFilters: React.FC<SideFiltersProps> = ({ onFilterChange }) => {
  const [availableStops, setAvailableStops] = useState<number[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);
  const [allSelected, setAllSelected] = useState(true);

  useEffect(() => {
    const stopsCounts = new Set<number>();

    tickets.forEach((ticket) => {
      ticket.segments.forEach((segment) => {
        stopsCounts.add(segment.stops.length);
      });
    });

    const sortedStops = Array.from(stopsCounts).sort((a, b) => a - b);
    setAvailableStops(sortedStops);
  }, []);

  useEffect(() => {
    onFilterChange(allSelected ? [] : selectedFilters);
  }, [selectedFilters, allSelected, onFilterChange]);

  const handleAllChange = (checked: boolean) => {
    setAllSelected(checked);
    if (checked) {
      setSelectedFilters([]);
    }
  };

  const handleStopChange = (stops: number, checked: boolean) => {
    if (checked) {
      setSelectedFilters((prev) => [...prev, stops]);
      setAllSelected(false);
    } else {
      setSelectedFilters((prev) => prev.filter((s) => s !== stops));
      if (selectedFilters.length === 1 && selectedFilters.includes(stops)) {
        setAllSelected(true);
      }
    }
  };

  const stopOptions = [
    { value: 0, label: "Без пересадок" },
    { value: 1, label: "1 пересадка" },
    { value: 2, label: "2 пересадки" },
    { value: 3, label: "3 пересадки" },
  ];

  return (
    <div className={styles.sideFilters}>
      <div className={styles.filterTitle}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <Checkbox label="Все" checked={allSelected} onChange={handleAllChange} />
      {stopOptions.map(
        (option) =>
          availableStops.includes(option.value) && (
            <Checkbox
              key={option.value}
              label={option.label}
              checked={selectedFilters.includes(option.value)}
              onChange={(checked) => handleStopChange(option.value, checked)}
            />
          ),
      )}
    </div>
  );
};
