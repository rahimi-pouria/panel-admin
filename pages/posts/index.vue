<template>
  <div class="d-flex">
    asd
    <div v-for="(item, i) in postData" :key="i" class="d-flex flex-column">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  layout: 'PanelAdmin',
  data () {
    return {
      postData: []
    }
  },
  computed: {
  },
  created() {
    },
  mounted() {
    this.$store.dispatch('getPost')
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
</style>
