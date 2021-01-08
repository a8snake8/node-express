import Vue from 'vue'
import http from '../../axios/http'
import { ACCESS_TOKEN } from '../mutations'
const menu = {
  state: () => ({
    token: ''
  }),
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },
  actions: {
    // 账号密码登录
    Login ({ commit }, userinfo) {
      return new Promise((resolve, reject) => {
        http.post('login', userinfo).then((response) => {
          if (response.status == '200') {
            const result = response.data
            Vue.ls.set(ACCESS_TOKEN, result.token, 3 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
          } else {
            reject(response)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  getters: {}
}

export default menu