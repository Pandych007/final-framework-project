<template>
  <div class="search2">
    <select
      v-model="selectedOption"
      @change="handleSortChange"
      id="searchSelekt"
    >
      <option value="rating" selected>по рейтингу</option>
      <option value="price">по стоимости</option>
      <option value="delivery">по дате доставки</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SortSelect",
  data() {
    return {
      selectedOption: "rating",
    };
  },
  methods: {
    handleSortChange() {
      this.$emit("sort-changed", this.selectedOption);
    },
  },
};
</script>
