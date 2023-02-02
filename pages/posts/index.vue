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
  data () {
    return {
      perPage: 10,
      currentPage: 1,
      postData: []
    }
  },
  async fetch() {
    this.postData = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
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
