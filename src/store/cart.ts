import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/products";

export type CartItem = { product: Product; qty: number };

type CartState = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  update: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (p, q = 1) => {
        const items = [...get().items];
        const i = items.findIndex((x) => x.product.id === p.id);
        if (i >= 0) items[i] = { ...items[i], qty: items[i].qty + q };
        else items.push({ product: p, qty: q });
        set({ items });
      },
      update: (id, qty) =>
        set({
          items: get()
            .items.map((x) => (x.product.id === id ? { ...x, qty } : x))
            .filter((x) => x.qty > 0),
        }),
      remove: (id) =>
        set({ items: get().items.filter((x) => x.product.id !== id) }),
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((s, x) => s + x.product.price * x.qty, 0),
    }),
    { name: "whatbytes-cart" }
  )
);
