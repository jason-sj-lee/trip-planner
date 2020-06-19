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
  position: absolute;
  height: 1000px;
  width: 100%;
  bottom: 0;
  }
</style>

