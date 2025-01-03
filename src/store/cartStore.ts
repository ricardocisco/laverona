import { create } from "zustand";

interface Pizza {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  quantity?: number;
}

type CartProps = {
  items: Pizza[];
  total: number;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  addToCart: (cart: Pizza) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartProps>((set) => ({
  items: [],
  total: 0,
  increment: (id) =>
    set((state) => {
      const newItem = state.items.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      );
      const total = newItem.reduce(
        (sum, item) => sum + item.price * (item.quantity || 0),
        0
      );

      return { items: newItem, total };
    }),
  decrement: (id) =>
    set((state) => {
      const newItem = state.items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 0) - 1, 0) }
          : item
      );
      const total = newItem.reduce(
        (sum, item) => sum + item.price * (item.quantity || 0),
        0
      );

      return { items: newItem, total };
    }),
  addToCart: (cart) =>
    set((state) => {
      const item = state.items.find((item) => item.id === cart.id);
      const newItem = item
        ? state.items.map((item) =>
            item.id === cart.id
              ? { ...item, quantity: (item.quantity || 0) + 1 }
              : item
          )
        : [...state.items, { ...cart, quantity: 1 }];
      const total = newItem.reduce(
        (sum, item) => sum + item.price * (item.quantity || 0),
        0
      );

      return { items: newItem, total };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const newItem = state.items.filter((item) => item.id !== id);
      const total = newItem.reduce(
        (sum, item) => sum + item.price * (item.quantity || 0),
        0
      );

      return { items: newItem, total };
    }),
  clearCart: () =>
    set(() => {
      return { items: [], total: 0 };
    })
}));
