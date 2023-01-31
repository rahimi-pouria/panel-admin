<template>
  <div class="d-flex flex-column g24">
    <div class="d-flex w-100">
      <!--  title post  -->
      <div class="d-flex justify-content-between align-items-center g16 w-100">
        <span class="f18-400 text right">عنوان مقاله</span>
        <!-- select lang   -->
        <div class="d-flex w-25">
          <b-form-select v-model="lang" class="mb-3 w-100">
            <template #first>
              <b-form-select-option :value="null" disabled>زبان را انتخاب کنید</b-form-select-option>
            </template>
            <b-form-select-option value="C">فارسی</b-form-select-option>
            <b-form-select-option value="D">انگلیسی</b-form-select-option>
            <b-form-select-option value="D">عربی</b-form-select-option>
          </b-form-select>
        </div>
      </div>
    </div>
    <div class="d-flex w-100">
      <input type="text" class="form-control shadowbox p-2" placeholder="عنوان پست....">
    </div>
<!--  type text message  -->
    <div class="d-flex flex-column bg-white shadowbox">
<!--  icon setting text    -->
      <form name="testform">
        <TiptapEditor />
      </form>
    </div>
  </div>
</template>

<script>

import TiptapEditor from "./TiptapEditor";
export default {
  name: "typingPost",
  props: [
    'mediaAddText',
    'showModal',
    'sourcePhoto',
    'showModalGallery'],
  components: {
    TiptapEditor,
  },
  data () {
    return{
      getText: '',
      lang: null,
      selectedText: ''
    }
  },
  methods: {
    boldText() {
      console.log('clicked')
    }
  }
}
</script>

<style scoped lang="scss">
textarea {
  height: 150px;
  border-radius: 0px !important;
}
.addMedia {
  background: #fff;
  padding: 5px 17px;
  border-radius: 8px;
  border: 1px solid #e7e7e7;
  &:hover {
    background: #729bf3 !important;
    color: #ffffff;
  }
}
.iconText{
  padding: 8px !important;
  &:hover{
    background: #729bf3 !important;
    color: #ffffff;
    cursor: pointer;
    border-radius: 5px;
   }
}
</style>
