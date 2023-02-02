<template>
 <div class="container-fluid  pt-2 d-flex w-100">
   <div class="d-flex flex-wrap r-16 w-100 panel">
     <div class="col-md-2 col-sm-12 bg-white w-100 sidebar">
       <sidBarLogo />
       <sidBarNavbar />
     </div>
     <div class="col-md-10 col-sm-12">
       <Nuxt />
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "PanelAdmin",
}
</script>

<style scoped>
.sidebar{
  background: #f5f9fa !important;
  border-left: 1px solid #d7d7d7;
  height: 100vh;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
</style>
