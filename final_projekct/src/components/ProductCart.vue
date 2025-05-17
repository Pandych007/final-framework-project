<template>
  <div class="product-card">
    <div class="heart-icon"></div>
    <img
      :src="`http://localhost:1452/${product.images[0]}`"
      :alt="product.name"
    />
    <p class="title">
      <router-link :to="`/product/${product.id}`">
        {{ product.name }}
      </router-link>
    </p>
    <p class="price">{{ product.price }}</p>
    <button @click="$emit('add-to-cart')">Buy Now</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  emits: ["add-to-cart"],
  setup(props, { emit }) {
    return {
      emit,
    };
  },
});
</script>
