import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // Cognitoの認証判定をuserステートに保存
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
