<template>
  <v-app >
    <v-app-bar class="nav" color="transparent" dense flat app>
      <router-link to="/"></router-link>
      <router-link to="/results">Results</router-link>
    </v-app-bar>
   
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .nav {
    display: inline;
  }
</style>