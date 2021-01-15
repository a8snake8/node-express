<template>
  <div id="app">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%',padding: '0 20px' }">
        <a-row type="flex" justify="space-between">
          <a-col :sm="3" :xs="4">
            <div class="logo" />
          </a-col>
          <a-col :sm="21" :xs="0">
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
            </a-menu>
          </a-col>
          <a-col :sm="0" :xs="4">
            <a-button type="primary" @click="collapsed=true">
              <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
            </a-button>
            <a-drawer placement="left" :closable="false" :visible="collapsed" @close="collapsed = false">
              <a-menu @select="e=>{$router.push({path: e.key}),collapsed = false}" mode="inline"
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
              </a-menu>
            </a-drawer>
          </a-col>
        </a-row>
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
  data () {
    return {
      collapsed: false
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

<style>
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
</style>
