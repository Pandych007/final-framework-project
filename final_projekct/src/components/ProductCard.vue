<template>
  <div class="product-card product-card2">
    <div class="heart-icon" @click="toggleFavorite">
      <img
        :src="
          isFavorite
            ? require('@/assets/static/img/likeRed.png')
            : require('@/assets/static/img/like.png')
        "
        alt=""
        style="width: 32px !important"
      />
    </div>
    <img :src="`http://localhost:1452/${product.images[0]}`" alt="iPhone" />

    <p class="title">
      <router-link :to="`/product/${product.id}`">{{
        product.name
      }}</router-link>
    </p>
    <p class="price">${{ product.price }}</p>
    <button @click="$emit('add-to-cart')">Buy Now</button>
  </div>
</template>
<script>
import { useFavoritesStore } from "@/stors/favorites";
import { mapState } from "pinia";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  emits: ["add-to-cart"],
  computed: {
    ...mapState(useFavoritesStore, ["items"]),
    isFavorite() {
      return this.items.some((item) => item.id === this.product.id);
    },
  },
  methods: {
    toggleFavorite() {
      const favoritesStore = useFavoritesStore();

      if (this.isFavorite) {
        favoritesStore.removeItem(this.product.id);
      } else {
        favoritesStore.addItem(this.product);
      }
    },
    emits: ["add-to-cart"],
    addToCart() {
      this.$emit("add-to-cart", this.product);
      alert("Товар добавлен");
    },
  },
};
</script>
