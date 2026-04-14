import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: number;
  restaurantId: number;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  restaurantId: number | null;
  restaurantName: string | null;
  restaurantWhatsappNumber: string | null;

  addItem: (
    item: Omit<CartItem, "quantity">,
    restaurant: {
      id: number;
      name: string;
      whatsappNumber: string;
    }
  ) => void;

  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;

  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      restaurantId: null,
      restaurantName: null,
      restaurantWhatsappNumber: null,

      addItem: (item, restaurant) =>
        set((state) => {
          // başqa restoranın səbəti varsa
          if (
            state.restaurantId !== null &&
            state.restaurantId !== restaurant.id
          ) {
            alert(
              `Your cart already contains items from ${state.restaurantName}. Clear the cart before ordering from another restaurant.`
            );
            return state;
          }

          const existing = state.items.find((i) => i.id === item.id);

          if (existing) {
            return {
              ...state,
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }

          return {
            ...state,
            restaurantId: restaurant.id,
            restaurantName: restaurant.name,
            restaurantWhatsappNumber: restaurant.whatsappNumber,
            items: [...state.items, { ...item, quantity: 1 }],
          };
        }),

      removeItem: (id) =>
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== id);

          if (updatedItems.length === 0) {
            return {
              items: [],
              restaurantId: null,
              restaurantName: null,
              restaurantWhatsappNumber: null,
            };
          }

          return {
            ...state,
            items: updatedItems,
          };
        }),

      increaseQuantity: (id) =>
        set((state) => ({
          ...state,
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => {
          const updatedItems = state.items
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0);

          if (updatedItems.length === 0) {
            return {
              items: [],
              restaurantId: null,
              restaurantName: null,
              restaurantWhatsappNumber: null,
            };
          }

          return {
            ...state,
            items: updatedItems,
          };
        }),

      clearCart: () => ({
        items: [],
        restaurantId: null,
        restaurantName: null,
        restaurantWhatsappNumber: null,
      }),

      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
    }),
    {
      name: "cart-storage",
    }
  )
);