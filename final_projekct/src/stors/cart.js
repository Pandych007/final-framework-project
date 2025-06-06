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
        this.items.push({ ...product, quantity: 1 });
      }
    },

    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },

    updateQuantity(id, newQuantity) {
      const item = this.items.find((item) => item.id === id);
      if (item) {
        item.quantity = newQuantity;
      }
    },
  },
  getters: {
    total: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    itemCount: (state) =>
      state.items.reduce((count, item) => count + item.quantity, 0),
  },
});
