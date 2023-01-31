<template>
  <div class="d-flex flex-column bg-white w-100 p-3 r-6 shadowbox">
    <div class="d-flex justify-content-between w-100">
      <p class="f18-700">گالری عکس </p>
      <input
        id="upload2"
        type="file"
        class="btnLink pointer"
        hidden
        @change="chooseGallery"/>
      <label class="titleUploadFile" for="upload2">انتخاب عکس های گالری</label>
    </div>
    <div class="d-flex w-100">
        <div id="showGallery"
             class="d-flex position-relative">
            <div
                 v-for="item in gallery"
                 :key="item"
                 class="d-flex position-relative g18 p-2"
                 style="
                  width: 143px;
                  height: 100px;
                  border: 1px solid #000;
                  border-radius: 10px;
                  "
            >
              <span class="position-absolute removeImage">&times;</span>
              <img v-if="item" id="preview" class="w-100" :src="item" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryComponent",
  data () {
    return {
      gallery: [],
      addGallery: null,
      url: null,
    }
  },
  methods: {
    chooseGallery (e) {
      const file = e.target.files[0];
      this.addGallery = URL.createObjectURL(file);
      this.gallery.push(this.addGallery)
      console.log(this.gallery)
    }
  }
}
</script>

<style scoped lang="scss">
  .removeImage{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #d5d5d5;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  div#showGallery {
    padding-top: 30px;
    display: flex;
    gap: 17px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  label.titleUploadFile {
    color: #fff;
    background-color: #729bf3 !important;
    border: 1px solid #729bf3 !important;
    border-radius: 5px;
    padding: 8px 22px;
    cursor: pointer;
  }
</style>
