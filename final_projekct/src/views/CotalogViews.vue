<template>
  <div class="container">
    <ToastNotification ref="toast" />

    <div class="catalog">
      <FilterSection :products="products" @filter-changed="applyFilters" />
      <div class="catalogRight">
        <div class="textContainer5-2 containerTextProduckt">
          <h3 v-if="currentCategoryName">
            Категория: {{ currentCategoryName }}
          </h3>
          <h3 v-else>Discounts up to -50%</h3>
          <SortSelect @sort-changed="applySort" />
        </div>

        <div class="productCard2Catalog">
          <ProductCard
            v-for="product in paginatedProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart(product)"
          />
        </div>

        <div v-if="filteredProductsAll.length" class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">
            Previous
          </button>

          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="{ active: page === currentPage }"
          >
            {{ page }}
          </button>

          <button @click="nextPage" :disabled="currentPage === totalPages">
            Next
          </button>
        </div>

        <div v-else class="no-results">No products found</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FilterSection from "../components/FilterSection.vue";
import ProductCard from "../components/ProductCard.vue";
import SortSelect from "../components/SortSelect.vue";
import { useCartStore } from "@/stors/cart";
import ToastNotification from "@/components/ToastNotification.vue";

export default {
  name: "CatalogView",
  components: {
    FilterSection,
    ProductCard,
    SortSelect,
    ToastNotification,
  },
  data() {
    return {
      products: [],
      filteredProductsAll: [],
      currentPage: 1,
      itemsPerPage: 12,
      activeFilters: {},
      sortOption: "rating",
      cart: useCartStore(),
      currentCategoryName: "",
    };
  },
  computed: {
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProductsAll.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredProductsAll.length / this.itemsPerPage);
    },
  },
  async created() {
    try {
      this.currentCategoryName = this.$route.query.categoryName || "";

      const response = await axios.get("http://localhost:1452/api/products/");
      this.products = Array.isArray(response.data) ? response.data : [];

      this.filterProducts();
    } catch (error) {
      console.error("Error:", error);
      this.products = [];
      this.filteredProductsAll = [];
    }
  },
  methods: {
    addToCart(product) {
      this.cart.addItem(product);
      this.$refs.toast.show();
    },
    applyFilters(filters) {
      this.activeFilters = filters;
      this.filterProducts();
    },

    applySort(option) {
      this.sortOption = option;
      this.filterProducts();
    },

    filterProducts() {
      let result = [...this.products];

      if (this.currentCategoryName) {
        result = result.filter(
          (product) =>
            product.category &&
            product.category.toLowerCase() ===
              this.currentCategoryName.toLowerCase()
        );
      }

      Object.values(this.activeFilters).forEach((filterConfig) => {
        result = result.filter((product) => {
          if (filterConfig.field === "brand") {
            return filterConfig.values.includes(product.brand);
          }

          const characteristic = product.characteristics?.find(
            (c) => c.characteristic === filterConfig.characteristic
          );
          return (
            characteristic && filterConfig.values.includes(characteristic.value)
          );
        });
      });

      switch (this.sortOption) {
        case "price":
          result.sort((a, b) => a.price - b.price);
          break;
        case "delivery":
          result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
          break;
        case "discount":
          result.sort(
            (a, b) => (b.discount_price || 0) - (a.discount_price || 0)
          );
          break;
        case "rating":
        default:
          result.sort((a, b) => b.rating - a.rating);
      }

      this.filteredProductsAll = result;
      this.currentPage = 1;
    },

    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },

    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },

    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) this.currentPage = page;
    },
  },
  watch: {
    "$route.query.categoryName"(newCategoryName) {
      this.currentCategoryName = newCategoryName || "";
      this.filterProducts();
    },
  },
};
</script>

<style>
@import "@/assets/static/css/style.css";
@import "@/assets/static/css/cotalog.css";
.pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
}
.pagination button {
  padding: 6px 12px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
}
.pagination button.active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}
.no-results {
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #666;
}
</style>
