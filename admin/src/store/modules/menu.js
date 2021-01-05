import Vue from 'vue'
import { DEFAULT_THEME } from '@/store/mutations'
const menu = {
  state: () => ({
    theme: ''
  }),
  mutations: {
    TOGGLE_THEME: (state, theme) => {
      Vue.ls.set(DEFAULT_THEME, theme)
      state.theme = theme
    },
  },
  actions: {},
  getters: {}
}

export default menu