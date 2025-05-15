<template>
  <div class="cart__item">
    <img
      :src="`http://localhost:1452/${product.images[0]}`"
      :alt="product.name"
      class="cart__item-img"
    />
    <div class="cart__item-info">
      <p class="cart__item-name">{{ product.name }}</p>
      <p class="cart__item-code">#{{ product.id }}</p>
    </div>
    <div class="cart__item-controls">
      <button
        class="cart__btn"
        @click="decrementQuantity"
        :disabled="product.quantity <= 1"
      >
        -
      </button>
      <span>{{ product.quantity }}</span>
      <button class="cart__btn" @click="incrementQuantity">+</button>
    </div>
    <div class="cart__item-price">
      ${{ (product.price * product.quantity).toFixed(2) }}
    </div>
    <button class="cart__remove" @click="removeFromCart">×</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCartStore } from "@/stors/cart";

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const cart = useCartStore();

    const removeFromCart = () => {
      cart.removeItem(props.product.id);
    };

    const incrementQuantity = () => {
      cart.updateQuantity(props.product.id, props.product.quantity + 1);
    };

    const decrementQuantity = () => {
      if (props.product.quantity > 1) {
        cart.updateQuantity(props.product.id, props.product.quantity - 1);
      }
    };

    return {
      cart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
    };
  },
});
</script>
