<template>
  <div id="app">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo" />
        <a-menu @select="e=>$router.push({path: e.key})" theme="dark" mode="horizontal"
          :default-selected-keys="[$route.path]" :style="{ lineHeight: '64px' }">
          <a-menu-item key="/">
            首页
          </a-menu-item>
          <a-menu-item key="/project">
            个人项目
          </a-menu-item>
          <a-menu-item key="/talk">
            留言
          </a-menu-item>
          <a-menu-item key="/person">
            个人介绍
          </a-menu-item>
          <a-input-search placeholder="文章关键词" style="width: 200px;margin-left:100px;" @search="onSearch" />
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ padding: '20px', marginTop: '64px' }">
        <div :style="{ background: '#fff', padding: '20px', minHeight: '380px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Peter Hu ©2021 Blog Website
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted () {
  },
  methods: {
    onSearch () {
    },
  }
}
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 40px;
  background: url("../src/assets/img/logo.png") no-repeat;
  background-size: 100% auto;
  margin-top: 12px;
  margin-right: 40px;
  float: left;
}
</style>
