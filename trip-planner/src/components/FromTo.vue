<template>
  <v-card class="from-to-card" outlined>
    <p class="from-to-text">From</p>
    <p class="location">Toronto</p>
    <p class="airport">YYZ, Toronto, CA</p>
  </v-card>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .from-to-card {
    flex-grow: 1;
    height: 100px;
    margin: 40px;
    flex-direction: column;
    align-items: center;
  }

  .from-to-text {
    font-weight: bold;
    color: #787878;
    font-size: 14px;
    margin-left: 10px;
    margin-bottom: 0;
    margin-top: 5px;
  }

  .location {
    font-weight: bold;
    font-size: 30px;
    margin-left: 10px;
    margin-bottom: 0;
  }

  .airport {
    font-weight: bold;
    font-size: 14px;
    color: #4E4E4E;
    margin-left: 10px;
    margin-bottom: 0;
  }
</style>