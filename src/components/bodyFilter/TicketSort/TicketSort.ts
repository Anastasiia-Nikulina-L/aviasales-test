import { Ticket } from "../../../data/ticket";

export const sortTickets = (tickets: Ticket[], type: 'cheapest' | 'fastest' | 'optimal'): Ticket[] => {
  const sorted = [...tickets];

  switch (type) {
    case 'cheapest':
      return sorted.sort((a, b) => a.price - b.price);

    case 'fastest':
      return sorted.sort((a, b) => {
        const durationA = a.segments[0].duration + a.segments[1].duration;
        const durationB = b.segments[0].duration + b.segments[1].duration;
        return durationA - durationB;
      });

    case 'optimal':
      return sorted.sort((a, b) => {
        const scoreA = a.price + (a.segments[0].duration + a.segments[1].duration) * 60;
        const scoreB = b.price + (b.segments[0].duration + b.segments[1].duration) * 60;
        return scoreA - scoreB;
      });

    default:
      return sorted;
  }
};