export type ReservationRestaurant = {
  id: number;
  name: string;
  slug: string;
  address: string;
  image: string;
  rating: number;
  emptyTables: number;
};

export type ReservationTable = {
  id: number;
  name: string;
  seats: number;
  isReserved: boolean;
};

export type ReservationFormData = {
  fullName: string;
  phone: string;
  guestCount: string;
  date: string;
  time: string;
  note: string;
};