<template>
  <ToastNotification ref="toast" />

  <div class="container2">
    <div class="textPhoto">
      <div class="container2Text">
        <p class="tagline">Pro.Beyond.</p>
        <h2>IPhone 14 Pro</h2>
        <p class="description">
          Created to change everything for the better. For everyone
        </p>
        <router-link to="/cotalog" class="buttonShop">Shop Now</router-link>
      </div>
      <div class="container2Img">
        <img src="@/assets/static/img/Iphone.png" alt="" />
      </div>
    </div>
  </div>

  <div class="container3">
    <div class="left">
      <div class="PlayStation">
        <img src="@/assets/static/img/PlayStation.png" alt="PlayStation 5" />
        <div>
          <h2 class="PlaystationText">Playstation 5</h2>
          <p class="PlaystationText2">
            Incredibly powerful CPUs, GPUs, and an SSD with <br />
            integrated I/O will redefine your PlayStation experience.
          </p>
        </div>
      </div>

      <div class="bottom-row">
        <div class="AppleMax">
          <img src="@/assets/static/img/appleMax.png" alt="AirPods Max" />
          <div>
            <h2 class="AppleMaxText">Apple AirPods Max</h2>
            <p class="AppleMaxText2">
              Computational audio. <br />
              Listen, it's powerful
            </p>
          </div>
        </div>

        <div class="visionPro">
          <img src="@/assets/static/img/visonpro.png" alt="Vision Pro" />
          <div>
            <h2 class="VisionProText">Apple Vision Pro</h2>
            <p class="VisionProText2">
              An immersive way to <br />
              experience <br />
              entertainment
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="MacBook">
        <div>
          <h2 class="MacbookText">Macbook <span>Air</span></h2>
          <p class="MacbookText2">
            The new 15-inch MacBook Air makes room for more of what you love<br />
            with a spacious Liquid Retina display.
          </p>
          <router-link to="/cotalog" class="MacBookButton"
            >Shop Now</router-link
          >
        </div>
        <img src="@/assets/static/img/MacBookPro14.png" alt="MacBook Air" />
      </div>
    </div>
  </div>

  <div class="container4">
    <div class="category-wrapper">
      <div class="category-header">
        <h2>Browse By Category</h2>
        <div class="arrows">
          <span class="arrow left">&#10094;</span>
          <span class="arrow right">&#10095;</span>
        </div>
      </div>
      <div class="slider">
        <div
          v-for="category in categories"
          :key="category.id"
          @click="selectCategory(category.name)"
          class="slide slideCategory"
        >
          <img :src="getCategoryImage(category.id)" :alt="category.name" />
          <p>{{ category.name }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container5">
    <div class="product-tabs">
      <span class="active-tab">New Arrival</span>

      <span>
        <router-link to="/cotalog">Bestseller</router-link>
      </span>
      <span></span>
      <span>
        <router-link to="/favorite">Featured Products</router-link>
      </span>
    </div>

    <div class="product-grid">
      <ProductCart
        v-for="product in products.slice(0, 8)"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart(product)"
      />
    </div>
  </div>

  <div class="container6">
    <div class="container6Products">
      <div class="Products">
        <img class="img1" src="@/assets/static/img/Products.png" alt="" />
        <h2 class="ProductsText1">Popular Products</h2>
        <p class="ProductsText2">
          iPad combines a magnificent 10.2-inch Retina display, br incredible
          performance, multitasking and ease of use.
        </p>
        <router-link to="/cotalog" class="buttonProducts">Shop Now</router-link>
      </div>

      <div class="ipad">
        <img class="img1" src="@/assets/static/img/ipadPro.png" alt="" />
        <h2 class="ipadText1">Ipad Pro</h2>
        <p class="ipadText2">
          iPad combines a magnificent 10.2-inch Retina display, br incredible
          performance, multitasking and ease of use.
        </p>

        <router-link to="/cotalog" class="ipadProducts">Shop Now</router-link>
      </div>

      <div class="SamsungPhone">
        <img class="img1" src="@/assets/static/img/SamsungGalaxsy.png" alt="" />
        <h2 class="SamsungPhoneText1">Ipad Pro</h2>
        <p class="SamsungPhoneText2">
          iPad combines a magnificent 10.2-inch Retina display, br incredible
          performance, multitasking and ease of use.
        </p>
        <router-link to="/cotalog" class="macboockProducts"
          >Shop Now</router-link
        >
      </div>

      <div class="macboock">
        <img class="img1" src="@/assets/static/img/MacbookPro1.png" alt="" />
        <h2 class="macboockText1">Ipad Pro</h2>
        <p class="macboockText2">
          iPad combines a magnificent 10.2-inch Retina display, br incredible
          performance, multitasking and ease of use.
        </p>

        <router-link to="/cotalog" class="macboockProducts macboockProducts_new"
          >Shop Now</router-link
        >
      </div>
    </div>
  </div>

  <div class="container5-2">
    <div class="textContainer5-2">
      <h3>Discounts up to -50%</h3>
    </div>
    <div class="product-grid">
      <ProductCart
        v-for="product in products.slice(0, 4)"
        :key="product.id"
        :product="product"
        @add-to-cart="cart.addItem(product)"
      />
    </div>
  </div>

  <div class="container7">
    <div class="container7_1">
      <div class="container7Text">
        <h2>Big Summer Sale</h2>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <br /><br />
        <router-link to="/cotalog" class="buttonShop">Shop Now</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCart from "@/components/ProductCart.vue";
import axios from "axios";
import { useCartStore } from "@/stors/cart";
import ToastNotification from "@/components/ToastNotification.vue";

import phonesImg from "@/assets/static/img/Phones.png";
import watchesImg from "@/assets/static/img/Smart Watches.png";
import camerasImg from "@/assets/static/img/Cameras.png";
import headphonesImg from "@/assets/static/img/Headphones.png";
import computersImg from "@/assets/static/img/Computers.png";
import gamingImg from "@/assets/static/img/Gaming.png";

export default {
  components: { ProductCart, ToastNotification },
  data() {
    return {
      products: [],
      categories: [],
      cart: useCartStore(),

      categoryImages: {
        1: headphonesImg,
        2: phonesImg,
        3: computersImg,
        4: gamingImg,
        5: watchesImg,
        6: camerasImg,
      },
    };
  },
  async created() {
    const response = await axios.get("http://localhost:1452/api/products/");
    const categories = await axios.get("http://localhost:1452/api/category/");

    this.categories = categories.data;

    this.products = response.data;
  },
  methods: {
    addToCart(product) {
      this.cart.addItem(product);
      this.$refs.toast.show();
    },
    handleAddCart(product) {
      console.log("Товар добавлен!", product);
    },
    getCategoryImage(categoryName) {
      return this.categoryImages[categoryName];
    },
    selectCategory(categoryName) {
      this.$router.push({
        path: "/cotalog",
        query: { categoryName: categoryName },
      });
    },
  },
};
</script>
<style>
@import "@/assets/static/css/style.css";
</style>
