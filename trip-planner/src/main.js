import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Results from './components/Results.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home},
  { path: '/results', component: Results}
];

const router = new VueRouter ({
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
