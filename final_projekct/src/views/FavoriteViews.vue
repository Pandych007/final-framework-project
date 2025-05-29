<template>
  <main class="favorites">
    <h2 class="favorites__title">Favorites</h2>

    <div class="favorites__list">
      <ProductCardFavorite
        v-for="item in favorites.items"
        :key="item.id"
        :product="item"
        @remove="favorites.removeItem(item.id)"
      />
    </div>
  </main>
</template>

<script setup>
import { useFavoritesStore } from "@/stors/favorites";
import ProductCardFavorite from "@/components/ProductCardFavorite.vue";

const favorites = useFavoritesStore();
</script>

<style>
@import "@/assets/static/css/style.css";
@import "@/assets/static/css/favorite.css";
</style>
