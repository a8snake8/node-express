import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
    user
  },
  state: {},
  getters
})

