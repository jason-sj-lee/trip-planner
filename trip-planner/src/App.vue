<template>
  <v-app>
    <router-link to="/">Home</router-link>
    <router-link to="/results">Results</router-link>
    <router-view></router-view>
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
