<template>
  <div class="container2">
    <div class="textPhoto">
      <div class="container2Text">
        <p class="tagline">Pro.Beyond.</p>
        <h2>IPhone 14 Pro</h2>
        <p class="description">
          Created to change everything for the better. For everyone
        </p>
        <button class="buttonShop">Shop Now</button>
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
          <button class="MacBookButton">Shop Now</button>
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
        <div class="slide">
          <img src="@/assets/static/img/Phones.png" alt="" />
          <p>Phones</p>
        </div>
        <div class="slide">
          <img src="@/assets/static/img/Smart Watches.png" alt="" />
          <p>Smart Watches</p>
        </div>
        <div class="slide">
          <img src="@/assets/static/img/Cameras.png" alt="" />
          <p>Cameras</p>
        </div>
        <div class="slide">
          <img src="@/assets/static/img/Headphones.png" alt="" />
          <p>Headphones</p>
        </div>
        <div class="slide">
          <img src="@/assets/static/img/Computers.png" alt="" />
          <p>Computers</p>
        </div>
        <div class="slide">
          <img src="@/assets/static/img/Gaming.png" alt="" />
          <p>Gaming</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container5">
    <div class="product-tabs">
      <span class="active-tab">New Arrival</span>
      <span>Bestseller</span>
      <span>Featured Products</span>
    </div>

    <div class="product-grid">
      <ProductCart
        v-for="product in products.slice(0, 8)"
        :key="product.id"
        :product="product"
        @add-to-cart="cart.addItem(product)"
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
        <button class="buttonProducts">Shop Now</button>
      </div>

      <div class="ipad">
        <img class="img1" src="@/assets/static/img/ipadPro.png" alt="" />
        <h2 class="ipadText1">Ipad Pro</h2>
        <p class="ipadText2">
          iPad combines a magnificent 10.2-inch Retina display, br incredible
          performance, multitasking and ease of use.
        </p>
        <button class="ipadProducts">Shop Now</button>
      </div>

      <div class="SamsungPhone">
        <img class="img1" src="@/assets/static/img/SamsungGalaxsy.png" alt="" />
        <h2 class="SamsungPhoneText1">Ipad Pro</h2>
        <p class="SamsungPhoneText2">
          iPad combines a magnificent 10.2-inch Retina display, br incredible
          performance, multitasking and ease of use.
        </p>
        <button class="SamsungPhoneProducts">Shop Now</button>
      </div>

      <div class="macboock">
        <img class="img1" src="@/assets/static/img/MacbookPro1.png" alt="" />
        <h2 class="macboockText1">Ipad Pro</h2>
        <p class="macboockText2">
          iPad combines a magnificent 10.2-inch Retina display, br incredible
          performance, multitasking and ease of use.
        </p>
        <button class="macboockProducts">Shop Now</button>
      </div>
    </div>
  </div>

  <div class="container5-2">
    <div class="textContainer5-2">
      <h3>Discounts up to -50%</h3>
    </div>
    <div class="product-grid">
      <div class="product-card">
        <div class="heart-icon"></div>
        <img src="@/assets/static/img/AppleMaxCont5.png" alt="Camera" />
        <p class="title">AirPods Max Silver</p>
        <p class="price">$549</p>
        <button>Buy Now</button>
      </div>

      <div class="product-card">
        <div class="heart-icon"></div>
        <img src="@/assets/static/img/appleWatchCont5.png" alt="Watch" />
        <p class="title">
          Apple Watch Series 9 GPS 41mm Starlight Aluminium Case
        </p>
        <p class="price">$399</p>
        <button>Buy Now</button>
      </div>

      <div class="product-card">
        <div class="heart-icon"></div>
        <img src="@/assets/static/img/AppleiPhone14Pro1TB.png" alt="AirPods" />
        <p class="title">Apple iPhone 14 Pro 1TB Gold (MQ2V3)</p>
        <p class="price">$1499</p>
        <button>Buy Now</button>
      </div>
    </div>
  </div>

  <div class="container7">
    <div class="container7_1">
      <div class="container7Text">
        <h2>Big Summer Sale</h2>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <button>Shop Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCart from "@/components/ProductCart.vue";
import axios from "axios";
import { useCartStore } from "@/stors/cart";

export default {
  components: { ProductCart },
  data() {
    return {
      products: [],
      cart: useCartStore(),
    };
  },
  async created() {
    const response = await axios.get("http://localhost:1452/api/products/");
    this.products = response.data;
  },
  methods: {
    handleAddCart(product) {
      console.log("Товар добавлен!", product);
    },
  },
};
/*
import { ref } from "vue";


const products = ref([]);*/
</script>
<style>
@import "@/assets/static/css/style.css";
</style>
