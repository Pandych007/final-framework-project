import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(product) {
      const existing = this.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.item.push({ ...product, quantity: 1 });
      }
    },
    removeItem(id) {
      this.items.filter((item) => item.id !== id);
    },
    getters: {
      total: (state) =>
        state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    },
  },
});
