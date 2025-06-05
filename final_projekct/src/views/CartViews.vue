<template>
  <main class="cart">
    <h2 class="cart__title">Shopping Cart</h2>
    <div class="cart__container">
      <div v-if="cart.items.length === 0" class="cart__items">
        Корзина пуста
      </div>
      <div v-else class="cart__items">
        <ProduktBaskets
          v-for="item in cart.items"
          :key="item.id"
          :product="item"
          @add-to-cart="cart.addItem(item)"
        />
      </div>

      <div class="cart__summary">
        <h3>Order Summary</h3>
        <input
          type="text"
          placeholder="Discount code / Promo code"
          class="cart__input"
        />
        <input
          type="text"
          placeholder="Enter Card Number"
          class="cart__input"
        />
        <button class="cart__apply-btn">Apply</button>
        <div class="cart__totals">
          <div class="cart__totals-row">
            <span>Subtotal</span>
            <span>0${{ cart.subtotal }}</span>
          </div>
          <div class="cart__totals-row">
            <span>Estimated Tax</span>
            <span>0${{ cart.tax }}</span>
          </div>
          <div class="cart__totals-row">
            <span>Estimated shipping & Handling</span>
            <span>0${{ cart.shipping }}</span>
          </div>
          <div class="cart__totals-row cart__totals-total">
            <strong>Total</strong>
            <strong>${{ cart.total }}</strong>
          </div>
        </div>
        <button class="cart__checkout">Checkout</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useCartStore } from "@/stors/cart";
import ProduktBaskets from "@/components/ProduktBaskets.vue";

const cart = useCartStore();
</script>

<style>
@import "@/assets/static/css/style.css";
@import "@/assets/static/css/Cart.css";
</style>
