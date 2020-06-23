<template>
  <v-card class="from-to-card" outlined>
    <p class="from-to-text">{{ fromTo }}</p>
    <!-- <p class="location">Toronto</p> -->
    <v-autocomplete class="location" :items="cities"></v-autocomplete>
  </v-card>
</template>

<script>
export default {
  name: 'FromTo',
  props: {
    fromTo: null
  },
  data: function() {
    return {
      cities: [
        "London", "New York", "Paris", "Tokyo", "Moscow", "Dubai", "Singapore", "Barcelona", "Los Angeles",
        "Rome", "San Fransisco", "Madrid", "chicago", "Amsterdamn", "Beijing", "Toronto", "Hong Kong", 
        "Toronto", "Seoul"
      ]
    }
  }
}
</script>

<style scoped>
  .from-to-card {
    flex-grow: 1;
    height: 100px;
    margin: 40px;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 4%;
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
    /* font-weight: bold;
    font-size: 30px;
    margin-left: 10px;
    margin-bottom: 0; */
    width: 80%;
    margin-left: 10px;
  }
</style>