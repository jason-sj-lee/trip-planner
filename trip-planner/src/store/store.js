import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    from: '',
    to: '',
    dep: '',
    arr: ''
  },
  mutations: { 
    changeFrom(state, from) {
      state.from = from
    },
    changeTo(state, to) {
      state.to = to
    },
    depDate(state, dep) {
      state.dep = dep
    },
    arrDate(state, arr) {
      state.arr = arr
    }
  },
  getters: {
    from: state => state.from,
    to: state => state.to,
    dep: state => state.dep,
    arr: state => state.arr
  }
})
