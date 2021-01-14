import axios from 'axios'
import Vue from 'vue'
import { ACCESS_TOKEN } from '../store/mutations'
import router from '../router/index'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api'
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = Vue.ls.get(ACCESS_TOKEN) || ''
  if (token) {
    config.headers['X-Access-Token'] = 'Bearer ' + token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  console.log(error.response.status)
  // 对响应错误做点什么
  if (error.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: error.response.data.message
    })
  }
  if (error.response.status === 401) {
    router.push('/Login')
  }
  return Promise.reject(error);
});

export default http