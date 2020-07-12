<template>
  <div class="about">
    <results-plane :atoken="this.$data.accessToken" :cityObj="this.$data.cityCodes"></results-plane>
    <results-hotel :atoken="this.$data.accessToken" :cityObj="this.$data.cityCodes"></results-hotel>
  </div>
</template>

<script>
import ResultsPlane from "../components/ResultsPlane";
import ResultsHotel from "../components/ResultsHotel";

import { store } from "../store/store"

export default {
  name: "results",
  components: {
    ResultsPlane,
    ResultsHotel,
  },
  data() {
    return {
      store: store,
      accessToken: 'lbJfZ6Om2UIgXj8qwhJULdcxRQa4',
      from: store.state.from,
      to: store.state.to,
      arr: store.state.arr,
      dep: store.state.dep,
      cityCodes: {
        "London": "LON", 
        "New York": "NYC", 
        "Paris": "PAR", 
        "Tokyo": "TYO", 
        "Moscow": "MOW", 
        "Dubai": "DXB", 
        "Singapore": "SIN", 
        "Barcelona": 'BCN',
        "Los Angeles": "LAX",
        "Rome": "ROM", 
        "San Fransisco": "SFO",
        "Madrid": "MAD", 
        "Chicago": "CHI", 
        "Amsterdamn": "AMS", 
        "Beijing": "PEK", 
        "Toronto": "TOR", 
        "Hong Kong": "HKG",
        "Seoul": "SEL"
      }
    }
  }
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-around;
  background-color: white;
  z-index: 1;
  height: 75vh;
  width: 75vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  border-radius: 25px;
}
</style>