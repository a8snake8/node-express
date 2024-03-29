import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
require('./static/css/common.scss')
//Vue插件，用于从Vue上下文中使用本地Storage，会话Storage和内存Storage
import Storage from 'vue-ls'
import config from '@/defaultSetting'
Vue.use(Storage, config.storageOptions)
// vue富文本编辑器插件
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'
Vue.prototype.$tinymce = tinymce // 将全局tinymce对象指向给Vue作用域下
Vue.use(VueTinymce)              // 安装vue的tinymce组件

Vue.config.productionTip = false

import http from './axios/http'

// 将请求挂载到原型
Vue.prototype.$http = http

// 设置公共mixin函数
Vue.mixin({
  computed: {
    upload_url () {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    initHeader () {
      return {
        'X-Access-Token': `Bearer ${JSON.parse(localStorage.pro__ACCESS_TOKEN).value}`
      }
    }
  }
})

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
