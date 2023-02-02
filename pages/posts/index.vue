<template>
  <div class="d-flex flex-column">
    <b-table
      id="my-table"
      class="table-hover pointer bg-white"
      :items="postData"
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
</template>

<script>
export default {
  name: "Index",
  layout: 'PanelAdmin',
  async fetch() {
    this.postData = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
  },
  data () {
    return {
      perPage: 10,
      currentPage: 1,
      postData: []
    }
  },
  computed: {
  },
  created() {
    },
  mounted() {
   console.log(this.postData)
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
</style>
