<template >
  <div class="top">
    <el-page-header @back="goBack" :content="title">
    </el-page-header>
  </div>
</template>

<script>
export default {
  props: {
    'title': String,
  },
  data () {
    return {
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  margin-bottom: 20px;
}
</style>