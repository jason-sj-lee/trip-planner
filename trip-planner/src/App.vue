<template>
  <v-app >
    <background></background>
    <v-app-bar class="nav" color="transparent" dense flat app>
      <router-link to="/">Home</router-link>
      
    </v-app-bar>
   
    <v-main>
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>

<script>
import Background from './components/Background.vue';
import { store } from './store/store';

export default {
  name: 'App',
  store: store,
  components: {
    Background
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.nav a {
  color: black;
  text-decoration: none;
}
</style>