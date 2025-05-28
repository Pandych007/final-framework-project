<template>
  <div class="product-card product-card2">
    <div class="heart-icon" @click="toggleFavorite">
      <img src="@/assets/static/img/like.png" alt="" />
    </div>
    <img :src="`http://localhost:1452/${product.images[0]}`" alt="iPhone" />
    <p class="title">
      <router-link :to="`/product/${product.id}`">{{
        product.name
      }}</router-link>
    </p>
    <p class="price">${{ product.price }}</p>
    <button @click="addToCart">Buy Now</button>
  </div>
</template>
<script>
/*
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const favorityStore = useFaforitiesStore();
const isFavorite = computed(() => favorityStore.isFavorite(props.product.id));

const toggleFavorite = () => {
  if (isFavorite.value) {
    favorityStore.removeFromFavorities(props.product.id);
  } else {
    favorityStore.addToFavorities(props.product.id);
  }
};

const addToCart = () => {
  this.$emit("add-to-cart", this.product);
};*/
import { defineComponent, computed } from "vue";
import { useFavoritesStore } from "@/stors/favorites";

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  emits: ["add-to-cart"],
  setup(props, { emit }) {
    const favoritesStore = useFavoritesStore();

    const isFavorite = computed(() =>
      favoritesStore.isFavorite(props.product.id)
    );

    const toggleFavorite = () => {
      if (isFavorite.value) {
        favoritesStore.removeFromFavorites(props.product.id);
      } else {
        favoritesStore.addToFavorites(props.product);
      }
    };

    return {
      isFavorite,
      toggleFavorite,
      emit,
    };
  },
});
</script>
