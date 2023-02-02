<template>
  <div class="d-flex flex-column g8 justify-content-start align-items-start border-0"
  >
<!-- responsive button   -->
    <button class="d-flex flex-column btnResponsive g4 justify-content-center align-items-center btn w-25" @click ="show = !show">
      <span
class="line bg-dark" style="width: 50px;padding: 3px;
    border-radius: 26px;"></span>
      <span
class="line bg-dark" style="width: 50px;padding: 3px;
    border-radius: 26px;"></span>
      <span
class="line bg-dark" style="width: 50px;padding: 3px;
    border-radius: 26px;"></span>
    </button>
    <div
         class="d-flex w-100 justify-content-between border-0">
      <b-card no-body class="mb-1">
        <b-card-header
          v-for="(item, i) in navbarMenu"
          :key="i" header-tag="header"
          class="p-1 w-100" role="tab"
        >
          <img :src="item.icon" alt="" style="width: 20px">
          <nuxt-link
                     v-b-toggle.accordion-1
                     :to="item.path"
                     block
                     variant="info">
            {{ item.name }}
          </nuxt-link>
        </b-card-header>
        <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel">
          <b-card-body>
            <b-card-text v-for="(link, a) in navbarMenu.subMenu" :key="a">
                {{ link.name }}
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data () {
    return {
      show: true,
      navbarMenu: []
    }
  },
  mounted() {
    this.navbarMenu = this.$store.state.Navbar
  }
}
</script>

<style scoped lang="scss">
.menuSidebar{
  padding: 8px 0;
  a{
    &:hover{
      color: #ffffff !important;
    }
  }
  &:hover{
    background: #729bf3;
    color: #ffffff !important;
    padding: 8px 0;
  }
}
/* responsive */
@media screen and (max-width: 600px){
  .hidden{
    display: none !important;
  }
}
@media screen and (min-width: 1200px){
  .btnResponsive{
    display: none !important;
  }
}
</style>
