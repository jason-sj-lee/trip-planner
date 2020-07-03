<template>
  <div class="about">
    <results-plane :atoken="this.$data.accessToken"></results-plane>
    <results-hotel :atoken="this.$data.accessToken"></results-hotel>
    <results-food :atoken="this.$data.accessToken"></results-food>
  </div>
</template>

<script>
import ResultsPlane from "../components/ResultsPlane";
import ResultsHotel from "../components/ResultsHotel";
import ResultsFood from "../components/ResultsFood";

import { store } from "../store/store"

export default {
  name: "results",
  components: {
    ResultsPlane,
    ResultsHotel,
    ResultsFood
  },
  data() {
    return {
      store: store,
      accessToken: 'R1G2URHZs3Om2Auhmtd167hApcAY',
      from: store.state.from,
      to: store.state.to,
      arr: store.state.arr,
      dep: store.state.dep
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