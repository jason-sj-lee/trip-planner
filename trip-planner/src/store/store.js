import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    from: '',
    to: ''
  },
  mutations: { 
    changeFrom(state, from) {
      state.from = from
    },
    changeTo(state, to) {
      state.to = to
    }
  },
  getters: {
    from: state => state.from,
    to: state => state.to
  }
})
