<template>
  <div class="product-card product-card2">
    <div class="heart-icon" @click="toggleFavorite">
      <img src="@/assets/static/img/like.png" alt="" />
    </div>
    <img :src="`http://localhost:1452/${product.images[0]}`" alt="iPhone" />
    <p class="title">{{ product.name }}</p>
    <p class="price">${{ product.price }}</p>
    <button @click="addToCart">Buy Now</button>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    addToCart() {
      this.$emit("add-to-cart", this.product);
    },
  },
};
</script>
