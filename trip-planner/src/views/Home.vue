<template>
  <div class="home">
    <v-img class="cloud-bg" src="../assets/cloud-bg.jpg"></v-img>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
  .cloud-bg {
  z-index: 0;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  }
</style>

