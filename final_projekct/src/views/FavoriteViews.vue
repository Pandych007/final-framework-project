<template>
  asfasfasf
  <main class="favorites">
    <h2 class="favorites__title">Favorite</h2>

    <div class="favorites__list">
      <div v-for="product in favs" :key="product.id" class="favorites__item">
        <!-- <img
            src="./static/img/AppleMaxCont5.png"
            alt="AirPods Max Silver"
            class="favorites__image"
          /> -->
        <div class="favorites__info">
          <p class="favorites__name">AirPods Max Silver</p>
          <p class="favorites__id">#53459358345</p>
        </div>
        <button @click="removeFromFavorites(product.id)">Удалить</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useFavoritesStore } from "@/stors/favorites";

const favsStore = useFavoritesStore();
const { favs } = storeToRefs(favsStore);
const { removeFromFavorites } = favsStore;
</script>
<style>
@import "@/assets/static/css/style.css";
@import "@/assets/static/css/favorite.css";
</style>
