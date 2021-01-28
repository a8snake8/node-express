<template>
  <div id="app">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%',padding: '0' }">
        <Header />
      </a-layout-header>
      <a-layout-content class="box" :style="{ marginTop: '64px' }">
        <div id="contain">
          <router-view class="animate__animated animate__fadeIn" />
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Peter Hu ©2021 Blog Website
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import Header from '../src/components/menu/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {

    }
  },
  competed () {
    this.onSearch()
  },
  methods: {
    onSearch () {
      console.log(window.screen.width)
    },
  }
}
</script>

<style lang="less">
#components-layout-demo-fixed .logo {
  width: 144px;
  height: 48px;
  margin-top: 12px;
  background: url("../src/assets/img/logo.png") no-repeat;
  background-size: 100% auto;
}
.ant-drawer-body {
  padding: 0 !important;
}
.box {
  background: #076585; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fff,
    #076585
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fff,
    #076585
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#contain {
  background: #fff;
}
</style>
