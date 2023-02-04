<template>
  <div class="d-flex flex-wrap justify-content-between">
    <div
      class="col-md-6 bg-white text-right w-100 d-flex flex-column g16"
      style="
      max-height: 451px;
      overflow: scroll;"
    >
      <div class="d-flex py-3">
        <h3 class="f22-700">آخرین پست ها</h3>
      </div>
      <div v-for="(item, i) in showPost" :key="i" class="d-flex w-100 border r-6 p-3 justify-content-between align-items-center">
        <div class="d-flex flex-column align-items-start text-left" style="width: 70% !important;">
          <h2 class="f18-700">{{ item.title }}</h2>
          <p>{{ item.body }}</p>
        </div>
        <div class="d-flex justify-content-center align-items-center" style="width: 30% !important;">
          <nuxt-link class="btnLink px-2" to="/Posts">دیدن پست ها</nuxt-link>
        </div>
      </div>
    </div>
    <div class="col-md-5 bg-white">
      <div class="d-flex py-3">
        <h3 class="f22-700">آخرین تیکت ها</h3>
      </div>
      <div v-for="(ticket, i) in showTickets" :key="i" class="d-flex w-100 border r-6 p-3 justify-content-between align-items-center">
        <div class="d-flex flex-column align-items-start text-left" style="width: 70% !important;">
          <h2 class="f18-700">{{ ticket.title }}</h2>
          <p>{{ ticket.body }}</p>
        </div>
        <div class="d-flex justify-content-center align-items-center" style="width: 30% !important;">
          <nuxt-link class="btnLink px-2" to="/Posts">دیدن پست ها</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionsComponent",
  data (){
    return {
      showPost:[],
      showTickets: []
    }
  },
  mounted() {
    this.showPost = this.$store.state.Posts
    this.showTickets = this.$store.state.Tickets
  }
}
</script>

<style scoped>

</style>
