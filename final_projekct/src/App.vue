<template>
  <div class="container">
    <header class="header">
      <div class="logo">
        <router-link to="/"
          ><img src="@/assets/static/img/Logo.png" alt=""
        /></router-link>
      </div>
      <SerchHeader />
      <div class="icon">
        <ul class="list_icon">
          <li>
            <router-link to="/cart">
              <img src="@/assets/static/img/basket.png" alt="." />
            </router-link>
          </li>
          <li>
            <router-link to="/favorite">
              <img src="@/assets/static/img/like.png" alt="."
            /></router-link>
          </li>
        </ul>
      </div>
      <div class="icon_mobile">
        <a>
          <img src="@/assets/static/img/Burger.png" alt="" />
        </a>
      </div>
    </header>
  </div>

  <router-view />

  <footer class="footer">
    <div class="footer__container">
      <div class="footer__section footer__about">
        <h2 class="footer__logo">cyber</h2>
        <p class="footer__description">
          <em
            >We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than</em
          >
        </p>
        <div class="footer__socials">
          <a href="#" aria-label="Twitter">
            <img
              src="@/assets/static/img/Twitter.png"
              alt="Twitter"
              class="footer__icon"
            />
          </a>
          <a href="#" aria-label="Facebook">
            <img
              src="@/assets/static/img/fasebook.png"
              alt="Facebook"
              class="footer__icon"
            />
          </a>
          <a href="#" aria-label="TikTok">
            <img
              src="@/assets/static/img/tiktok.png"
              alt="TikTok"
              class="footer__icon"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="@/assets/static/img/Instagram.png"
              alt="Instagram"
              class="footer__icon"
            />
          </a>
        </div>
      </div>

      <div class="footer__section">
        <h3 class="footer__title">Services</h3>
        <ul class="footer__list">
          <li>Bonus program</li>
          <li>Gift cards</li>
          <li>Credit and payment</li>
          <li>Service contracts</li>
          <li>Non-cash account</li>
          <li>Payment</li>
        </ul>
      </div>

      <div class="footer__section">
        <h3 class="footer__title">Assistance to the buyer</h3>
        <ul class="footer__list">
          <li>Find an order</li>
          <li>Terms of delivery</li>
          <li>Exchange and return of goods</li>
          <li>Guarantee</li>
          <li>Frequently asked questions</li>
          <li>Terms of use of the site</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SerchHeader from "./components/SerchHeader.vue";
</script>
<style>
@import "@/assets/static/css/Mobile.css";
@import "@/assets/static/css/app.css";
</style>
