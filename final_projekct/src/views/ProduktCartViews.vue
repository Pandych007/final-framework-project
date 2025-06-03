<template>
  <div v-if="product">
    <div class="productDedeil">
      <!-- Галерея изображений -->
      <div class="gelerea">
        <div class="productGelerea">
          <div class="up">
            <img
              :src="`http://localhost:1452/${mainImage}`"
              class="active"
              alt="Main product image"
            />
          </div>
          <div class="basic">
            <img
              v-for="(img, index) in product.images"
              :key="index"
              :src="`http://localhost:1452/${img}`"
              alt="Thumbnail"
              @click="mainImage = img"
              class="thumbnail"
            />
          </div>
        </div>
      </div>

      <!-- Основная информация -->
      <div class="characteristik">
        <h3>{{ product.name }}</h3>
        <p>
          <span class="priseNew"
            >${{ product.discount_price || product.price }}</span
          >
          <span v-if="product.discount_price" class="priseOld"
            >${{ product.price }}</span
          >
        </p>

        <!-- Характеристики -->
        <div class="detailCaracteristic">
          <div
            v-for="(char, index) in mainCharacteristics"
            :key="index"
            class="characteristicItem"
          >
            <div>
              <!-- Иконка можно добавить позже -->
            </div>
            <div>
              <span class="characteristiName">{{
                getCharacteristicName(char.characteristic)
              }}</span>
              <span class="characteristicValue">
                {{ char.value }}
                {{ char.unit_type !== "значение" ? char.unit_type : "" }}
              </span>
            </div>
          </div>
        </div>

        <!-- Описание -->
        <p>{{ productDescription }}</p>

        <!-- Кнопки -->
        <div class="buttons">
          <button class="wite" @click="addToWishlist">Add to Wishlist</button>
          <button class="blak" @click="addToCart">Add to Cart</button>
        </div>

        <!-- Информация о доставке -->
        <div class="info">
          <div class="infoItem">
            <div>
              <span class="infoItemText1">Free Delivery</span>
              <span class="infoItemText2">1-2 days</span>
            </div>
          </div>
          <div class="infoItem">
            <div>
              <span class="infoItemText1">Warranty</span>
              <span class="infoItemText2">{{ product.guarantee }} months</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Детали -->
    <div class="deteilProductBlock">
      <div class="deteilProductText">
        <h3>Details</h3>
        <p>{{ productDescription }}</p>

        <div
          v-for="(char, index) in product.characteristics"
          :key="index"
          class="detailItem"
        >
          <div class="detailItemleft">
            {{ getCharacteristicName(char.characteristic) }}
          </div>
          <div class="detailItemRight">
            {{ char.value }}
            {{ char.unit_type !== "значение" ? char.unit_type : "" }}
          </div>
        </div>
      </div>
    </div>

    <!-- Рейтинг -->
    <div class="statistic">
      <div class="statistikProdukt">
        <p class="reting">{{ product.rating }}</p>
        <p class="reviews">of {{ product.count_review }} reviews</p>
        <div class="stars">
          <img
            v-for="n in 4"
            :key="n"
            :src="getStarImage(n)"
            alt="Star rating"
          />
        </div>
      </div>
    </div>

    <!-- Похожие товары -->
    <div class="container5-2 container5_2Deteil">
      <div class="textContainer5-2">
        <h3>Discounts up to -50%</h3>
      </div>
      <div class="product-grid">
        <!-- Здесь можно добавить компонент для похожих товаров -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useFavoritesStore } from "@/stors/favorites";
import { useCartStore } from "@/stors/cart";

const route = useRoute();
const product = ref(null);
const mainImage = ref("");

const mainCharacteristics = computed(() => {
  return product.value?.characteristics?.slice(0, 6) || [];
});

const productDescription = computed(() => {
  return `Enhanced capabilities thanks to an enlarged display of ${
    product.value?.characteristics?.find(
      (c) => c.characteristic === "Диагональ"
    )?.value || "N/A"
  } inches and work without recharging throughout the day.`;
});

const getCharacteristicName = (name) => {
  const names = {
    Процессор: "Processor",
    "Объем встроенной памяти": "Internal memory",
    Аккумулятор: "Battery",
    Питание: "Power type",
    "Материал корпуса": "Body material",
    Вес: "Weight",
    Диагональ: "Screen diagonal",
    Разрешение: "Resolution",
  };
  return names[name] || name;
};

const getStarImage = (n) => {
  const rating = product.value?.rating || 0;
  const f = require("@/assets/static/img/Star4.png");
  const f1 = require("@/assets/static/img/Star5.png");
  const f2 = require("@/assets/static/img/Star0.png");
  if (rating >= n) return f;
  if (rating >= n - 0.5) return f1;
  return f2;
};

const fetchProduct = async () => {
  try {
    const response = await axios.get(
      `http://localhost:1452/api/products/${route.params.id}`
    );
    product.value = response.data;
    mainImage.value = product.value.images[0];
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

const addToWishlist = () => {
  console.log("Added to wishlist:", product.value);
  const favoritesStore = useFavoritesStore();

  favoritesStore.addItem(product.value);
};

const addToCart = () => {
  console.log("Added to cart:", product.value);
  const cart = useCartStore();
  cart.addItem(product.value);
};

onMounted(() => {
  fetchProduct();
});
</script>
<style>
@import "@/assets/static/css/style.css";
@import "@/assets/static/css/produktCart.css";
</style>
