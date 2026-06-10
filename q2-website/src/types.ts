export type EventItem = {
  id: string;
  title: string;
  date: string; // ISO string
  location: string;
  seatsRemaining: number;
  price: number; // 0 means free
  category: string;
  description: string;
  image: string;
};

export type Registration = {
  eventId: string;
  name: string;
  email: string;
  seats: number;
};
