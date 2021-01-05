import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
//Vue插件，用于从Vue上下文中使用本地Storage，会话Storage和内存Storage
import Storage from 'vue-ls'
import config from '@/defaultSetting'
Vue.use(Storage, config.storageOptions)

Vue.config.productionTip = false

import http from './axios/http'

Vue.prototype.$http = http

import { DEFAULT_THEME } from '@/store/mutations'

new Vue({
  router,
  store,
  // 加载默认配置
  mounted () {
    store.commit('TOGGLE_THEME', Vue.ls.get(DEFAULT_THEME, config.navTheme))
  },
  render: h => h(App)
}).$mount('#app')
