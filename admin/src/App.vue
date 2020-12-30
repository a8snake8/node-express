<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <div>hhah </div>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'app',
  data () {
    return {
      zh_CN,
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
