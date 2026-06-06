import type {
  ReservationRestaurant,
  ReservationTable,
} from "../types/reservation.types";

export const reservationRestaurants: ReservationRestaurant[] = [
  {
    id: 1,
    name: "Pizza House",
    slug: "pizza-house",
    address: "Nəsimi rayonu, 28 May küç. 12",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
    emptyTables: 8,
  },
  {
    id: 2,
    name: "Burger House",
    slug: "burger-house",
    address: "Nizami küç. 45",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    rating: 4.6,
    emptyTables: 12,
  },
  {
    id: 3,
    name: "Sushi Bar",
    slug: "sushi-bar",
    address: "Fountain Square, Bakı",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    rating: 4.9,
    emptyTables: 6,
  },
];

export const reservationTables: ReservationTable[] = [
  { id: 1, name: "Masa 1", seats: 2, isReserved: false },
  { id: 2, name: "Masa 2", seats: 4, isReserved: false },
  { id: 3, name: "Masa 3", seats: 4, isReserved: false },
  { id: 4, name: "Masa 4", seats: 6, isReserved: true },
  { id: 5, name: "Masa 5", seats: 2, isReserved: false },
  { id: 6, name: "Masa 6", seats: 4, isReserved: false },
  { id: 7, name: "Masa 7", seats: 8, isReserved: false },
  { id: 8, name: "Masa 8", seats: 2, isReserved: true },
  { id: 9, name: "Masa 9", seats: 4, isReserved: false },
];