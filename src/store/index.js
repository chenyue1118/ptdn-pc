import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils/auth'
import MyStorage from '@/utils/cache.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken() || '',
    userInfo: MyStorage.getItem('userInfo') || '',
    routes: MyStorage.getItem('routes') || []
  },
  getters: {
    token: state => {
      return state.token
    },
    userInfo: state => {
      return state.userInfo
    },
    routes: state => {
      return state.routes
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      MyStorage.setItem('userInfo', userInfo)
      state.userInfo = userInfo
    },
    SET_ROUTES: (state, routes) => {
      MyStorage.setItem('routes', routes)
      state.routes = routes
    },
    LOG_OUT: (state) => {
      MyStorage.clear()
      state.userInfo = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
