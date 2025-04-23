export interface Segment {
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
  }
  
export  interface Ticket {
    price: number;
    carrier: string;
    segments: [Segment, Segment];
  }

const cities = ["MOW", "LED", "KGD", "SVX", "KRR", "AER"];
const carriers = ["S7", "SU", "LH", "TK"];
  
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  
const getRandomDate = (start: Date, end: Date) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
  
const generateSegment = (origin: string, destination: string): Segment => {
    const stopsCount = getRandomInt(0, 2);
    const stops = Array(stopsCount).fill("").map(() => cities.filter(c => c !== origin && c !== destination)[getRandomInt(0, 3)]);
  
    return {
      origin,
      destination,
      date: getRandomDate(new Date(2025, 0, 1), new Date(2025, 11, 31)),
      stops,
      duration: getRandomInt(60, 360),
    };
  };
  
  const generateTicket = (): Ticket => {
    const [origin, destination] = cities.sort(() => 0.5 - Math.random()).slice(0, 2);
  
    return {
      price: getRandomInt(5000, 50000),
      carrier: carriers[getRandomInt(0, carriers.length-1)],
      segments: [
        generateSegment(origin, destination),
        generateSegment(destination, origin),
      ],
    };
  };



export const tickets: Ticket[] = Array(15).fill(null).map(generateTicket);
