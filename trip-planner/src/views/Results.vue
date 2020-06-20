<template>
  <div class="about">
    <results-list></results-list>
    <results-list></results-list>
    <results-list></results-list>
  </div>
</template>

<script>
import ResultsList from '../components/ResultsList'

export default {
  name: 'results',
  components: {
    ResultsList
  }
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-between;
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