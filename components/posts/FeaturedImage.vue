<template>
  <div class="d-flex flex-column g16 bg-white shadowbox p-3 r-6">
    <!--  header card featured image    -->
    <div class="d-flex justify-content-between border-bottom w-100 pb-2">
      <p class="f18-700">عکس شاخص</p>
    </div>
<!-- body card featured image   -->
    <div class="d-flex flex-column">
      <div class="d-flex flex-column" :class="{'hidePhoto': hidePhoto}">
<!--        header image feature-->
        <div class="d-flex">
          <span @click="hidePhoto = !hidePhoto">&times;</span>
        </div>
<!--    photo    -->
        <img :src="sourcePhoto" id="altText" style="width: 185px" alt="">
      </div>
      <button class="bg-white border-0"
              style="color:rgb(0, 122, 169);"
              @click="showModalGallery">اضافه کردن عکس شاخص</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedImage",
  props: ['showModalGallery', 'sourcePhoto'],
  data(){
    return {
      hidePhoto: false
    }
  }
}
</script>

<style scoped>
  .hidePhoto{
    display: none !important;
  }
</style>
