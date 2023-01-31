<template>
  <client-only placeholder="loading...">
    <ckeditor-nuxt v-model="contentHolder" :config="editorConfig"  />
  </client-only>
</template>

<script>
export default {
  components: {
    'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
  },
  data() {
    return {
      editorConfig: {
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
          headers: {
            'Authorization': 'optional_token'
          }
        }
      },
      contentHolder: ""
    }
  }
}
</script>
