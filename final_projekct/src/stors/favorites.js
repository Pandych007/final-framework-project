import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);

  function addToFavorites(product) {
    if (!favorites.value.some((item) => item.id === product.id)) {
      favorites.value.push(product);
    }
  }

  function removeFromFavorites(productId) {
    favorites.value = favorites.value.filter((item) => item.id !== productId);
  }

  function isFavorite(productId) {
    return favorites.value.some((item) => item.id === productId);
  }

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
});
