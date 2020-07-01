<template>
  <v-card class="from-to-card" outlined>
    <p class="from-to-text">{{ fromTo }}</p>
    <!-- <p class="location">Toronto</p> -->
    <v-autocomplete v-model="selected" class="location" :items="cities"></v-autocomplete>
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
      ],
      selected:[]
    }
  },
  methods: {
    checkFromTo: function(array){
      if (this.fromTo === "From") {
        this.$store.commit('changeFrom', array)
      }
      else {
        this.$store.commit('changeTo', array)
      }
    }
  },
  watch: {
    selected (newSelectedArray, oldSelectedArray) {
      this.checkFromTo(newSelectedArray);
      console.log(oldSelectedArray)
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
    /* margin-left: 10px;
    margin-bottom: 0; */
    width: 80%;
    margin-left: 10px;
    font-weight: bold;
    font-size: 30px;
  }
</style>