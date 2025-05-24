<template>
  <div class="filtrLeft">
    <ul>
      <li v-for="filter in dynamicFilters" :key="filter.id">
        <span class="filtr1">{{ filter.title }}</span>
        <div>
          <div class="searchContainer">
            <input
              class="inputSearch inputSearchBrent"
              type="text"
              placeholder="search"
              v-model="filter.searchQuery"
              @input="updateFilterOptions(filter)"
            />
          </div>
          <ul class="leftFilterUl">
            <li v-for="option in filter.filteredOptions" :key="option.value">
              <input
                type="checkbox"
                :id="`${filter.id}-${option.value}`"
                :value="option.value"
                v-model="filter.selected"
                @change="applyFilters"
              />
              <label :for="`${filter.id}-${option.value}`">
                {{ option.label }}
              </label>
              <span>({{ option.count }})</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilterSection",
  props: {
    products: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      dynamicFilters: [
        {
          id: "brand",
          title: "Brand",
          field: "brand",
          searchQuery: "",
          selected: [],
          options: [],
          filteredOptions: [],
        },
        {
          id: "battery",
          title: "Аккумулятор",
          field: "characteristics",
          characteristic: "Аккумулятор",
          searchQuery: "",
          selected: [],
          options: [],
          filteredOptions: [],
        },
        {
          id: "weight",
          title: "Вес",
          field: "characteristics",
          characteristic: "Вес",
          searchQuery: "",
          selected: [],
          options: [],
          filteredOptions: [],
        },
        {
          id: "diagonal",
          title: "Диагональ",
          field: "characteristics",
          characteristic: "Диагональ",
          searchQuery: "",
          selected: [],
          options: [],
          filteredOptions: [],
        },
      ],
    };
  },
  watch: {
    products: {
      immediate: true,
      handler(newVal) {
        if (Array.isArray(newVal) && newVal.length) {
          this.initFilters();
        }
      },
    },
  },
  methods: {
    initFilters() {
      if (!Array.isArray(this.products) || !this.products.length) return;

      this.dynamicFilters.forEach((filter) => {
        const valuesMap = new Map();

        this.products.forEach((product) => {
          let value;
          if (filter.field === "brand") {
            value = product.brand;
          } else {
            const char =
              product.characteristics?.find(
                (c) => c.characteristic === filter.characteristic
              ) || {};
            value = char.value;
          }

          if (value) {
            valuesMap.set(value, (valuesMap.get(value) || 0) + 1);
          }
        });

        filter.options = Array.from(valuesMap.entries())
          .filter(([value]) => Boolean(value))
          .map(([value, count]) => ({
            value: String(value),
            label: String(value),
            count,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        filter.filteredOptions = filter.options;
      });
    },

    updateFilterOptions(filter) {
      const searchQuery = filter.searchQuery.toLowerCase().trim();
      filter.filteredOptions = filter.options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery)
      );
    },

    applyFilters() {
      const activeFilters = {};
      this.dynamicFilters.forEach((filter) => {
        if (filter.selected.length) {
          activeFilters[filter.id] = {
            field: filter.field,
            characteristic: filter.characteristic,
            values: filter.selected,
          };
        }
      });
      this.$emit("filter-changed", activeFilters);
    },
  },
};
</script>
