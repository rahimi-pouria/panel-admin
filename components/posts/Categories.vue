<template>
  <div class="d-flex flex-column g8 bg-white shadowbox p-3 r-6">
<!--  header card categories    -->
    <div class="d-flex justify-content-between border-bottom w-100 pb-2">
      <p class="f18-700">دسته بندی ها</p>
    </div>
<!--  body card categories  -->
    <div class="d-flex flex-column w-100 g16">
      <b-card no-body class="w-100">
        <b-tabs pills card class="chooseTabList">
          <b-tab title="همه" active>
            <b-card-text>
              <div
                    v-for="item in Categories"
                   :key="item"
                   class="d-flex align-items-center g8">
                <input type="checkbox">
                <span>{{ item }}</span>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="استفاده شده">
            <b-card-text>
              <div
                v-for="item in Categories"
                :key="item"
                class="d-flex align-items-center g8">
                <input type="checkbox">
                <span>{{ item }}</span>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
      <div class="d-flex w-100 text-right r-6">
        <button
          @click="showCat = !showCat"
          class="bg-white w-50 border-0 w-100 text-right"
          style="color: #007aa9"
        >
          دسته بندی جدید</button>
      </div>
      <div :class="{'addCats': showCat}" class="d-flex w-100 g8">
        <input ref="getNameCat" type="text" class="form-control">
        <button
          @click="addCat"
          class="btnAdd"
        >
          افزودن</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categoriesComponent",
  data () {
    return {
      showCat: true,
      newCat: '',
      Categories: [
        'دسته بندی وجود ندارد'
      ],
    }
  },
  methods: {
    addCat () {
      this.newCat = this.$refs.getNameCat.value
      this.Categories.push(this.newCat)
      this.$refs.getNameCat.value = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .addCats{
    display: none !important;
  }
  .btnAdd {
    background: #ffff;
    border: 1px solid #e7e7e7;
    padding: 0 12px;
    border-radius: 8px;
  }
  .btnAdd:hover{
    background: #729bf3;
    color: #ffffff;
  }
/* responsive */
  @media only screen and (max-width:1300px){
    .chooseTabList {
      .card-header{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
      }
      .nav .nav-pills .card-header-pills{
          width: 100%;
      }
    }
    li.nav-item {
      width: 100% !important;
      text-align: center !important;
    }
  }
</style>
