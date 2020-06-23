<template>
  <div class="about">
    <results-plane></results-plane>
    <results-hotel></results-hotel>
    <results-food></results-food>
  </div>
</template>

<script>
import ResultsPlane from '../components/ResultsPlane'
import ResultsHotel from '../components/ResultsHotel'
import ResultsFood from '../components/ResultsFood'

export default {
  name: 'results',
  components: {
    ResultsPlane,
    ResultsHotel,
    ResultsFood
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