<template>
  <div class="about">
    <div class="content">
      <h1>asdf</h1>
    </div>
    <v-img class="cloud-bg" src="../assets/cloud-bg.jpg"></v-img>
  </div>
</template>

<style scoped>
.cloud-bg {
  z-index: 0;
  position: absolute;
  height: 1000px;
  width: 100%;
  bottom: 0;
}

.content {
  position: relative;
  z-index: 0;
  background-color: blue;
  height: 1000px;
}
</style>