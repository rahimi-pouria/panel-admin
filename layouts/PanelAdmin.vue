<template>
 <div class="container-fluid  pt-2 d-flex w-100">
   <div class="d-flex flex-wrap r-16 w-100 panel">
     <div class="col-md-2 col-sm-12 bg-white w-100 shadowbox sidebar"
     >
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
.panel{
  background: #f3f4fb;
}
.sidebar{
}
</style>
