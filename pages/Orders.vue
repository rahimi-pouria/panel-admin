<template>
  <div class="d-flex flex-column g24 pt-5 px-3">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex">
        <h2 class="f18-700">لیست سفارش ها</h2>
      </div>
      <div class="d-flex w-50 justify-content-between align-items-center">
        <input
              ref="getValue"
              type="text"
              class="form-control"
              style="width: 70% !important;" placeholder="جستجو کنید">
        <button class="btnLink w-25" @click="search">جستجو کنید</button>
      </div>
    </div>
    <div class="overflow-auto">
      <b-table
        v-if="showSearch"
        id="my-table"
        class="table-hover pointer bg-white"
        :items="OrderProduct"
        :per-page="perPage"
        :current-page="currentPage"
        larg
      ></b-table>
<!--  filter order    -->
      <b-table
        id="my-table"
        class="table-hover pointer bg-white"
        :items="searchName"
        :per-page="perPage"
        :current-page="currentPage"
        larg
      ></b-table>
      <b-pagination
        v-model="currentPage"
        class="d-flex align-items-center"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        pills>
      </b-pagination>
    </div>
  </div>
</template>

<script>
import { BIconSearch } from 'bootstrap-vue'
export default {
  name: "Orders",
  components: [ BIconSearch ],
  layout: 'PanelAdmin',
  data () {
    return {
      perPage: 10,
      currentPage: 1,
      OrderProduct: [],
      searchValue: '',
      showSearch: true,
      searchName: []
    }
  },
  computed: {
    rows() {
      return this.OrderProduct.length
    }
  },
  mounted() {
    this.OrderProduct = this.$store.state.Order
    console.log(this.OrderProduct)
  },
  methods: {
    search () {
      this.searchValue = this.$refs.getValue.value
      this.searchName = this.OrderProduct.filter(item => item.order.includes(this.searchValue))
      this.showSearch = false
    }
  }
}
</script>

<style scoped>

</style>
