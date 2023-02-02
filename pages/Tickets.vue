<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center justify-content-center p-5 w-100">
      <h2 class="f18-700">لیست تیکت ها</h2>
    </div>
    <b-table
      id="my-table"
      class="table-hover pointer bg-white"
      :items="tickets"
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
  name: "Tickets",
  layout: 'PanelAdmin',
  async fetch () {
    this.tickets = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
  },
  data () {
    return {
      perPage: 10,
      currentPage: 1,
      tickets: []
    }
  }
}
</script>

<style scoped>

</style>
