<template>
  <main class="cart">
    <h2 class="cart__title">Shopping Cart</h2>
    <div class="cart__container">
      <div v-if="cart.items.length === 0" class="cart__items">
        Корзина пуста
      </div>
      <div v-else class="cart__items">
        <div class="cart__item">
          <div class="cart__item-info">
            <p class="cart__item-name">
              Apple iPhone 14 Pro Max 128Gb Deep Purple
            </p>
            <p class="cart__item-code">#1234567891011</p>
          </div>
          <div class="cart__item-controls">
            <button class="cart__btn">-</button>
            <span>1</span>
            <button class="cart__btn">+</button>
          </div>
          <div class="cart__item-price">$1399</div>
          <button class="cart__remove">×</button>
        </div>

        <div class="cart__item">
          <img alt="AirPods Max" class="cart__item-img" />
          <div class="cart__item-info">
            <p class="cart__item-name">AirPods Max Silver</p>
            <p class="cart__item-code">#53498568435</p>
          </div>
          <div class="cart__item-controls">
            <button class="cart__btn">-</button>
            <span>1</span>
            <button class="cart__btn">+</button>
          </div>
          <div class="cart__item-price">$549</div>
          <button class="cart__remove">×</button>
        </div>

        <div class="cart__item">
          <img alt="Apple Watch" class="cart__item-img" />
          <div class="cart__item-info">
            <p class="cart__item-name">
              Apple Watch Series 9 GPS 41mm Starlight Aluminium
            </p>
            <p class="cart__item-code">#58293234</p>
          </div>
          <div class="cart__item-controls">
            <button class="cart__btn">-</button>
            <span>1</span>
            <button class="cart__btn">+</button>
          </div>
          <div class="cart__item-price">$399</div>
          <button class="cart__remove">×</button>
        </div>
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
            <span>$2347</span>
          </div>
          <div class="cart__totals-row">
            <span>Estimated Tax</span>
            <span>$50</span>
          </div>
          <div class="cart__totals-row">
            <span>Estimated shipping & Handling</span>
            <span>$29</span>
          </div>
          <div class="cart__totals-row cart__totals-total">
            <strong>Total</strong>
            <strong>$2426</strong>
          </div>
        </div>
        <button class="cart__checkout">Checkout</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useCartStore } from "@/stors/cart";
const cart = useCartStore();
</script>
<style>
@import "@/assets/static/css/style.css";
@import "@/assets/static/css/Cart.css";
</style>
