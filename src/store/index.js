import Vue from 'vue'
import Vuex from 'vuex'
import persisitedState from 'vuex-persistedstate'
import { auLogin } from '@/api/user'
import router from '@/router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: '',
  },
  mutations: {
    // 存储Token
    SET_TOKEN (state, value) {
      state.token = value
    },
    // 存储用户信息
    SET_USERINFO (state, value) {
      state.userInfo = value
    }
  },
  actions: {
    // 获取用户信息
    async getUserInfo({ commit }, value) {
      const res = await auLogin(value)
      if (res.data) {
        commit('SET_TOKEN', res.data.jwt)
        commit('SET_USERINFO', res.data.user)
      }
    },
    logout({ commit }, value) {
      commit('SET_TOKEN', '')
      commit('SET_USERINFO', '')
      router.push(value)
    }
  },
  getters: {
    token: state => state.token,
    userInfo: state => state.userInfo
  },
  plugins: [
    persisitedState({
      path: ['token, userInfo']
    })
  ]
})
