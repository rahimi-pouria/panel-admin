<template>
  <div class="d-flex flex-column g24">
    <div class="d-flex">
      <p class="f24-700">داشبورد من</p>
    </div>
    <div class="d-flex justify-content-between">
      <NuxtLink
          to="/"
          class="col-md-2 OrderProject
          justify-content-center align-items-center
           p-4 g8 d-flex flex-column r-12">
        <BIconPlus class="f24-400" />
        <p class="f14-400 text-center">
          سفارش پروژه جدید
        </p>
      </NuxtLink>
      <div class="col-md-3 d-flex bg-white align-items-center justify-content-between"
           style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
        <div class="d-flex flex-column g4">
          <p class="f18-700 text-right">42</p>
          <p class="f14-400 text-right" style="color: #a1aab5">سفارش ثبت شده</p>
        </div>
        <span class="rounded-circle circlePhoto">
          <img src="@/assets/img/payment2.png" class="" style="width: 16px" alt="">
        </span>
      </div>
      <div class="col-md-3 d-flex bg-white align-items-center justify-content-between"
           style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
      >
        <div class="d-flex flex-column g4">
          <p class="f18-700 text-right">23</p>
          <p class="f14-400 text-right" style="color: #a1aab5">تیکت ارسالی</p>
        </div>
        <span class="rounded-circle circlePhoto">
          <BIconChat />
        </span>
      </div>
      <div class="col-md-3 d-flex bg-white align-items-center justify-content-between"
           style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
      >
        <div class="d-flex flex-column g4">
          <p class="f18-700 text-right">10</p>
          <p class="f14-400 text-right" style="color: #a1aab5">پرداخت کامل شده</p>
        </div>
        <span class="rounded-circle circlePhoto">
          <BIconCart />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconPlus, BIconCart, BIconChat } from 'bootstrap-vue'
export default {
  name: "MyDashboard",
  components: {
    BIconPlus,
    BIconCart,
    BIconChat
  }
}
</script>

<style scoped lang="scss">
  .OrderProject{
    background: #729bf3;
    color: #fff;
  }
  .circlePhoto{
    background: #e6e6e6 !important;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
