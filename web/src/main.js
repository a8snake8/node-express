import Vue from 'vue'
import App from './App.vue'
import 'reset-css'; // 样式重置
import { Button } from 'ant-design-vue';

Vue.component(Button.name, Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
