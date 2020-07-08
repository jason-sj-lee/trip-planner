<template>
  <v-card class="people-card" outlined>
    <p class="people-text">{{ numOfPeople }}</p>
    
    <v-select v-model="selected" class="people-select" :items="numbers"></v-select>
  </v-card>
</template>

<script>
export default {
  props: {
    numOfPeople: null
  },
  data: function() {
    return {
      numbers: [1,2,3,4,5,6,7,8,9,10],
      selected: []
    }
  },
  methods: {
    checkPeople: function(array) {
      if (this.numOfPeople === "Number of Adults") {
        this.$store.commit('changeAdults', array)
      }
      else {
        this.$store.commit('changeChildren', array)
      }
    }
  },
  watch: {
    selected (newSelectedArray, oldSelectedArray) {
      this.checkPeople(newSelectedArray);
      console.log(oldSelectedArray)
    }
  }
}
</script>

<style scoped>
  .people-card {
    height: 100px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    width: 20%;
  }

  .people-text {
    font-weight: bold;
    color: #787878;
    font-size: 14px;
    margin-left: 10px;
    margin-bottom: 0;
    margin-top: 5px;
  }

  .people-select {
    width: 78%;
    margin-left: 10px;
    font-weight: bold;
    font-size: 25px;
  }
</style>