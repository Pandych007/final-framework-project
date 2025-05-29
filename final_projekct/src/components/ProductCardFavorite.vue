<template>
  <div class="favorites__item">
    <img
      :src="`http://localhost:1452/${product.images[0]}`"
      :alt="product.name"
      class="favorites__image"
    />

    <div class="favorites__info">
      <p class="favorites__name">{{ product.name }}</p>
      <p class="favorites__id">#{{ product.id }}</p>
      <button class="cart__remove" @click="removeFromCart">×</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useFavoritesStore } from "@/stors/favorites";

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const favorites = useFavoritesStore();

    const removeFromCart = () => {
      favorites.removeItem(props.product.id);
    };

    return {
      favorites,
      removeFromCart,
    };
  },
});
</script>
