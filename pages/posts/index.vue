<template>
   <div class="d-flex position-relative flex-wrap pt-5">
     <!--  modal gallery  -->
     <div
          :class="{'showModal': showModal}"
          class="d-flex flex-column position-absolute w-100 bg-white r-12 shadow modalGallery"
          style="top: 0; z-index: 9; height: 100% !important;"
     >
<!--   header modal gallery    -->
       <div
class="d-flex w-100 justify-content-between p-3"
            style="border-bottom: 1px solid #e7e7e7 !important;">
<!--    title modal     -->
         <div class="d-flex">
           <p class="f18-700">گالری عکس و فیلم</p>
         </div>
         <span class="f24-700 pointer" @click="showModalGallery">&times;</span>
       </div>
<!--   body modal gallery      -->
       <b-card no-body>
         <b-tabs card>
           <b-tab title="کتالخانه پرونده های چند رسانه" active>
             <b-card-text class="d-flex border-0 h-100" style="height: 100vh">
               <template v-for="(item) in addMediaUser">
                 <div
                   v-if="imageData"
                   :key="item.id"
                   class="d-flex showMedia p-2 g16 h-100"
                   :class="selected.includes(item.id) && 'actives'"
                 >
                   <img
                     :src="item.photo"
                     alt=""
                     class="w-100"
                     @click="selecetImages(item.id, item)">
                 </div>
               </template>
               <div
                 v-for="(item) in addImages"
                 :key="item.id"
                 class="d-flex showMedia p-2 g16 h-100"
                 :class="selected.includes(item.id) && 'actives'"
               >
                 <img
                   :src="item.photo"
                   alt=""
                   class="w-100"
                   @click="selecetImages(item.id, item)">
               </div>
             </b-card-text>
             <div class="d-flex flex-column g32 col-md-12 col-sm-12">
               <b-form-group
                 label="عنوان"
                 class="mb-0 text-right"
               >
                 <b-form-input
                   id="title"
                   placeholder="عنوان"
                 ></b-form-input>
               </b-form-group>
               <b-form-group
                 label="متن alt عکس"
                 class="mb-0 text-right"
               >
                 <b-form-input
                   id="altTex2t"
                   placeholder="متن alt عکس"
                 ></b-form-input>
               </b-form-group>
               <b-form-group
                 label="توضیحات"
                 class="mb-0 text-right">
                 <b-form-textarea
                   id="textarea"
                   placeholder="توضیحات"
                   rows="3"
                   max-rows="6"
                 ></b-form-textarea>
               </b-form-group>
               <div class="d-flex w-100 align-items-end justify-content-end">
                 <button @click="setImage" class="btnLink px-3">تنظیم عکس شاخص</button>
               </div>
             </div>
           </b-tab>
           <b-tab title="بارگذاری پرونده های چند رسانه ای">
             <b-card-text
                          style="height: 100vh"
                          class="w-100 d-flex g18 flex-column pt-5
                           align-items-center">
               <p class="f18-700">باگذاری پرونده های چند رساته ای </p>
               <input
                      id="upload"
                      type="file"
                      accept="image/*,video/*"
                      @change="UploadFile"
                      hidden/>
               <label class="titleUploadFile" for="upload">بارگذاری فایل</label>
             </b-card-text>
           </b-tab>
         </b-tabs>
       </b-card>
     </div>
     <div class="col-md-9 d-flex flex-column p-3 g24">
       <typing-post :showModal="showModal"
                    :sourcePhoto="sourcePhoto"
                   :showModalGallery = showModalGallery
       />
       <GalleryComponent />
     </div>
      <div class="col-md-3 d-flex flex-column p-3 g24 r-12">
        <PublishComponent />
        <postsCategories />
        <postsFeaturedImage
             :show-modal-gallery = showModalGallery
                            :source-photo="sourcePhoto"  />
      </div>
   </div>
</template>

<script>
import TypingPost from "../../components/posts/typingPost";
import PublishComponent from "../../components/posts/Publish";
import GalleryComponent from "../../components/posts/Gallery";
export default {
  name: "Index",
  components: {GalleryComponent, PublishComponent, TypingPost},
  layout: 'PanelAdmin',
  data () {
    return {
      activated: false,
      showModal: true,
      addMediaUser: [],
      selected: [],
      selectPhoto: '',
      showMedia: '',
      sourcePhoto: '',
      mediaAddText: '',
      getFile: null,
      addImages: [],
      imageData: true,
      altImage: null
    }
  },
  mounted() {
    this.addMediaUser = this.$store.state.Media
  },
  methods: {
    // show modal
    showModalGallery () {
      this.showModal = !this.showModal
    },
    // select image
    selecetImages(id, item){
      if(this.selected.includes(id)){
        this.selected = this.addMediaUser.filter(s => s !== id)
        console.log(this.selected)
      }else{
        this.selected.push(id)
        console.log(this.selected)
      }
      this.sourcePhoto = item.photo
    },
  //  upload file
    UploadFile(e) {
      const file = e.target.files[0];
      this.getFile = URL.createObjectURL(file);
      console.log(this.getFile)
      this.addImages.push(...this.addMediaUser, {id: 10 , name: '',
        photo: this.getFile})
      this.imageData = false
    },
    setImage(){
      this.altImage = document.getElementById('altText')
      const altText = document.getElementById('altText').value
      this.altImage.setAttribute('alt', `${altText}`)
      console.log(this.altImage)
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped>
  .showModal{
    display: none !important;
  }
  .showMedia {
    width: 120px;
    border: 1px solid #e7e7e7;
    height: 115px;
    border-radius: 7px;
    cursor: pointer;
  }
  .actives{
    border: 2px solid blue;
  }
.titleUploadFile{
    display: inline-block;
    background-color: #729bf3 !important;
    color: white;
    padding: 8px 30px;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
  }
.toggleImage{
  display: block !important;
}
</style>
