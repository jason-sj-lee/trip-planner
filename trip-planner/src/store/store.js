import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    from: '',
    to: '',
    dep: '',
    arr: '',
    adults: null,
    children: null
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
    },
    changeAdults(state, adults) {
      state.adults = adults
    },
    changeChildren(state, children) {
      state.adults = children
    }
  },
  getters: {
    from: state => state.from,
    to: state => state.to,
    dep: state => state.dep,
    arr: state => state.arr,
    adults: state => state.adults,
    children: state => state.children
  }
})
