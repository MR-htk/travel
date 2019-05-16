import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '成都'
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
