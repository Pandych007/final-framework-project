<template>
  <div class="search">
    <div class="searchContainer">
      <img src="@/assets/static/img/Search.png" alt="" />
      <input
        v-model="searchQuery"
        @input="handleSearch"
        class="inputSearch"
        type="text"
        placeholder="search"
      />
    </div>
    <div v-if="showResults" class="search-results">
      <div v-if="loading" class="loading">Загрузка...</div>
      <div v-else-if="results.length === 0" class="no-results">
        товары не найдены
      </div>
      <div v-else>
        <router-link
          v-for="product in results"
          :key="product.id"
          :to="`/product/${product.id}`"
          class="serch-item"
          @click="closeResults"
        >
          <img
            :src="getImageUrl(product)"
            :alt="product.name"
            class="search-item-img"
          />
          <div class="search-item-info">
            <div class="search-item-name">{{ product.name }}</div>
            <div class="search-item-name">{{ product.price }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";
import { debounce } from "lodash-es";

const searchQuery = ref("");
const results = ref([]);
const loading = ref(false);
const showResults = ref(false);
const allProducts = ref([]);

onMounted(async () => {
  try {
    loading.value = true;
    const response = await axios.get("http://localhost:1452/api/products/");
    allProducts.value = response.data;
  } catch (error) {
    console.log("Ошибка загрузки товаров", error);
  } finally {
    loading.value = false;
  }
});

const performSearch = (query) => {
  if (!query || query.length < 2) {
    return [];
  }
  const lowerCaseQuery = query.toLowerCase();
  return allProducts.value.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      (product.description &&
        product.description.toLowerCase().includes(lowerCaseQuery))
  );
};

const handleSearch = debounce(() => {
  if (searchQuery.value.length < 2) {
    results.value = [];
    showResults.value = false;
    return;
  }
  showResults.value = true;
  results.value = performSearch(searchQuery.value);
}, 300);

const getImageUrl = (product) => {
  return product.images?.length
    ? `http://localhost:1452/image/${product.images[0]}`
    : "default.jpg";
};

const closeResults = () => {
  showResults.value = false;
  searchQuery.value = "";
};

const handleOutsite = (event) => {
  if (event.target.closest(".seacth-container")) {
    showResults.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleOutsite);
});

onUnmounted(() => {
  document.addEventListener("click", handleOutsite);
});
</script>
<style>
.search {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
}

/* .searchContainer {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
} */

.searchContainer img {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  opacity: 0.7;
}

.inputSearch {
  border: none;
  background: transparent;
  flex-grow: 1;
  font-size: 1rem;
  outline: none;
  color: #333;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 0.75rem;
  margin-top: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
}

.loading,
.no-results {
  padding: 1rem;
  text-align: center;
  font-style: italic;
  color: #777;
}

.serch-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  transition: background 0.2s;
}

.serch-item:hover {
  background-color: #f9f9f9;
}

.search-item-img {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-right: 1rem;
}

.search-item-info {
  display: flex;
  flex-direction: column;
}

.search-item-name {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.3;
}
</style>
