import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'reset-css'; // 样式重置
import 'ant-design-vue/dist/antd.css';
import http from '../src/untils/request'
import router from './router'

Vue.prototype.$http = http

Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
