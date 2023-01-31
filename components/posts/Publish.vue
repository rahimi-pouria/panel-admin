<template>
  <div class="d-flex flex-column bg-white shadowbox g16 p-3 r-6">
    <!--  header card featured image    -->
    <div class="d-flex justify-content-between border-bottom w-100 pb-2">
      <p class="f18-700">انشار پست</p>
    </div>
    <div class="d-flex w-100">
      <b-form-select v-model="selected" class="mb-3 w-100">
        <template #first>
          <b-form-select-option :value="null" disabled>انتخاب کنید</b-form-select-option>
        </template>
        <b-form-select-option value="C"> پیش نویس</b-form-select-option>
        <b-form-select-option value="D">عدم انتشار</b-form-select-option>
        <b-form-select-option value="D">انشتار</b-form-select-option>
      </b-form-select>
    </div>
    <button class="btnLink">اعمال تغییرات</button>
  </div>
</template>

<script>
export default {
  name: "PublishComponent",
  data () {
    return{
      selected: null,
    }
  }
}
</script>

<style scoped>
.shareBtn{
  background: #729bf3 !important;
  color: #ffffff;
}
.shareBtn:hover{
  background: #357afa !important;
  color: #ffffff;
}
</style>
