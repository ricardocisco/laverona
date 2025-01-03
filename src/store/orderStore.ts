import { create } from "zustand";

interface Pizza {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  quantity?: number;
}

interface OrderProps {
  id: string;
  date: Date;
  items: Pizza[];
}

interface OrderStore {
  orders: OrderProps[];
  addOrder: (order: OrderProps) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] }))
}));
