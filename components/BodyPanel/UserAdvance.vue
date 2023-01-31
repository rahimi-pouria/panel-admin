<template>
  <div class="d-flex justify-content-between w-100 User bg-white p-3"
  style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
    <div class="d-flex justify-content-center g8 align-items-center">
      <img src="@/assets/img/avatar.png" alt="" style="width: 30px;border-radius: 50%">
      <p class="f14-400">علی خلیلی فر</p>
    </div>
    <div class="d-flex d-flex justify-content-center g12 align-items-center">
      <p class="f14-400" style="color: #a1aab5">موجودی 2000 تومان </p>
      <BIconBell />
    </div>
  </div>
</template>

<script>
import { BIconBell } from 'bootstrap-vue'
export default {
  name: "UserAdvance",
  components: {
    BIconBell
  },
}
</script>

<style scoped>

</style>
