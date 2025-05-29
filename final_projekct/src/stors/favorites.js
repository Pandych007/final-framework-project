import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(product) {
      const existing = this.items.find((item) => item.id === product.id);
      if (!existing) {
        this.items.push({ ...product });
      }
    },

    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});
