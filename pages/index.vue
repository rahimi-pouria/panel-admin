<template>
  <div class="container p-4 d-flex flex-column g24">
    <BodyPanelUserAdvance />
    <MyDashboard />
    <OptionsComponent />
  </div>
</template>

<script>
import MyDashboard from "../components/BodyPanel/MyDashboard";
import OptionsComponent from "../components/BodyPanel/Options";
export default {
  name: 'IndexPage',
  components: {OptionsComponent, MyDashboard},
  layout: 'PanelAdmin',
  data () {
    return {

    }
  }
}
</script>
