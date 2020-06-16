<template>
  <div id="app">
    <h1>App</h1>
    <router-view></router-view>
    <router-link to="/">Home</router-link>
    <router-link to="/results">Results</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
