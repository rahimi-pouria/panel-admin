<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center justify-content-center p-5 w-100">
      <h2 class="f18-700">لیست پست ها</h2>
    </div>
      <div class="d-flex flex-column g18">
        <div
              v-for="(item, i) in postData"
             :key="i"
             class="d-flex w-100 g12 bg-white shadowbox p-3 r-6"

        >
          <div class="d-flex flex-column g16" style="width: 70%">
            <h2 class="f18-700">{{ item.title }}</h2>
            <nuxt-link :to="item.path">{{ item.continent}}</nuxt-link>
            <p class="f14-400">{{ item.description }}</p>
          </div>
          <hr>
          <div class="d-flex w-25">
            <img :src="item.image" class="w-100" alt="">
          </div>
        </div>
      </div>
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
    this.postData = await fetch('https://api.nuxtjs.dev/mountains')
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
