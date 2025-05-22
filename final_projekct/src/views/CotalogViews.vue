<template>
  <div class="catalog">
    <FilterSection @filter-changed="applyFilters" />
    <div class="catalogRight">
      <div class="textContainer5-2 containerTextProduckt">
        <h3>Discounts up to -50%</h3>
        <SortSelect @sort-changed="applySort" />
      </div>
      <div class="productCard2Catalog">
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">&lt;</button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ acive: page === currentPage }"
        >
          {{ page }}
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FilterSection from "../components/FilterSection.vue";
import ProductCard from "../components/ProductCard.vue";
import SortSelect from "../components/SortSelect.vue";

export default {
  name: "CotalogViews",
  components: {
    FilterSection,
    ProductCard,
    SortSelect,
  },
  data() {
    return {
      products: [],
      filteredProductsAll: [],
      currentPage: 1,
      itemsPerPage: 12,
      activeFilters: {},
      sortOption: "rating",
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
      const response = await axios.get("http://localhost:1452/api/products/");
      this.products = response.data;
      this.filterProduct();
    } catch (error) {
      console.error("Error: ", error);
    }
  },
  methods: {
    applyFilters(filters) {
      this.activeFilters = filters;
      this.filterProduct();
    },
    applySort(option) {
      this.sortOption = option;
      this.filterProduct();
    },
    filterProduct() {
      let result = [...this.products];

      if (this.activeFilters.battery) {
        result = result.filter((product) =>
          this.activeFilters.battery.includes(String(product.batteryCapacity))
        );
      }
      switch (this.sortOption) {
        case "price":
          result.sort((a, b) => a.price - b.price);
          break;
        case "delivery":
          result.sort(
            (a, b) => new Date(a.deliveryDate) - new Date(b.deliveryDate)
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
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
    addToCart(product) {
      console.log("Added to cart", product);
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
}
.pagination button {
  padding: 6px 12px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
}
.pagination button.acive {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}
</style>
