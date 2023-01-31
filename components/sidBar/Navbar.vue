<template>
  <div class="d-flex flex-column g8 justify-content-start align-items-start"
  >
<!-- responsive button   -->
    <button @click ="show = !show" class="d-flex flex-column btnResponsive g4 justify-content-center align-items-center btn w-25">
      <span class="line bg-dark" style="width: 50px;padding: 3px;
    border-radius: 26px;"></span>
      <span class="line bg-dark" style="width: 50px;padding: 3px;
    border-radius: 26px;"></span>
      <span class="line bg-dark" style="width: 50px;padding: 3px;
    border-radius: 26px;"></span>
    </button>
    <div v-for="(item, i) in Navbar"
         :key="i"
         :class="{'hidden': show}"
         class="d-flex w-100 menuSidebar">
      <NuxtLink :to="item.path" class="f16-400">
        <img :src="item.icon" alt="" style="width: 20px">
        {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data () {
    return {
      show: true,
      Navbar: [
        {
          name: 'داشبورد',
          path: '/',
          icon: require('@/assets/img/dashboard.png')
        },
        {
          name: 'سفارش جدید',
          path: '/',
          icon: require('@/assets/img/cart.png')
        },
        {
          name: 'سفارش ها',
          path: '/',
          icon: require('@/assets/img/order.png')
        },
        {
          name: 'پست ها',
          path: '/posts',
          icon: require('@/assets/img/payments.png')
        },
        {
          name: 'تیکت ها',
          path: '/',
          icon: require('@/assets/img/tickets.png')
        },
        {
          name: 'تنظیمات',
          path: '/',
          icon: require('@/assets/img/setting.png')
        },
        {
          name: 'خروج',
          path: '/',
          icon: require('@/assets/img/logout.png')
        }
      ]
    }
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
