<template>
  <v-app >
    <background></background>
    <v-app-bar class="nav" color="transparent" dense flat app>
      <router-link to="/">Home</router-link>
      <router-link to="/results">Results</router-link>
    </v-app-bar>
   
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import Background from './components/Background.vue';

export default {
  name: 'App',

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