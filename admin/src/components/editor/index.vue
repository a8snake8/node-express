<template>
  <div>
    <vue-tinymce v-model="modeldata" :setting="setting" />
  </div>
</template>

<script>
export default {
  name: '',
  props: ["value"],
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    const that = this
    return {
      modeldata: '',
      setting: {
        selector: '#textarea1',
        menubar: false,
        toolbar: "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
        toolbar_drawer: "sliding",
        quickbars_selection_toolbar: "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
        plugins: "link image media table lists fullscreen quickbars",
        language: 'zh_CN', //本地化设置
        height: 500,
        elementpath: false,
        //自定义上传图片
        images_upload_handler (blobInfo, success, failure, progress) {
          console.log(blobInfo, success, failure, progress, 444)
          const file = blobInfo.blob();
          const formData = new FormData()
          formData.append('file', file)
          that.$http.post('upload', formData).then((res) => {
            success(res.data.url)
          })
        },
      }
    };
  },
  watch: {
    modeldata (e) {
      this.$emit('change', e)
    },
    value (e) {
      this.modeldata = e
    }
  },
  methods: {},
};
</script>

<style scoped>
</style>
