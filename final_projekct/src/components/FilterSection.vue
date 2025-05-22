<template>
  <div class="filtrLeft">
    <ul>
      <li>
        <span class="filtr1"> Battery capacity </span>
        <div>
          <div class="searchContainer">
            <!-- <img
                src="./static/img/Search.png"
                class="iconSearchBrand"
                alt=""
              /> -->
            <input
              class="inputSearch inputSearchBrent"
              type="text"
              placeholder="search"
            />
          </div>
          <ul class="leftFilterUl">
            <li>
              <input type="checkbox" id="5000MH" />
              <label for="5000MH">5000 MH</label>
              <label>125</label>
            </li>
            <li>
              <input type="checkbox" id="6000MH" />
              <label for="4000MH">6000 MH</label>
              <label>110</label>
            </li>
            <li>
              <input type="checkbox" id="5500MH" />
              <label for="4000MH">6000 MH</label>
              <label>110</label>
            </li>
            <li>
              <input type="checkbox" id="4000MH" />
              <label for="4000MH">6000 MH</label>
              <label>110</label>
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
  data() {
    return {
      filters: [
        {
          id: "battery",
          title: "Battery capacity",
          searchQuery: "",
          selected: [],
          options: [
            { id: "5000", value: "5000", label: "5000", count: 125 },
            { id: "6000", value: "6000", label: "6000", count: 110 },
            { id: "5500", value: "5500", label: "5500", count: 111 },
            { id: "4000", value: "4000", label: "4000", count: 112 },
          ],
        },
      ],
    };
  },
  methods: {
    applyFilters() {
      const filters = {};
      this.filters.forEach((filter) => {
        if (filter.selected.length > 0) {
          filters[filter.id] = filter.selected;
        }
      });
      this.$emit("filter-changed", filters);
    },
  },
};
</script>
