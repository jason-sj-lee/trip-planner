<template>
  <div class="home">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <p class="motto">Where are we <strong>going</strong> today?</p>
    <div class="main-board">
      <v-row>
          <from-to fromTo="From"></from-to>
          <from-to fromTo="To"></from-to>
          <dep-arr></dep-arr>
          <div class="break"></div>
          <people numOfPeople="Number of Adults"></people>
          <people numOfPeople="Number of Children"></people>
          <budget class="budget-btn"></budget>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FromTo from '@/components/FromTo'
import DepArr from '@/components/DepArr'
import Budget from '@/components/Budget'
import People from '@/components/People'

export default {
  name: 'Home',
  components: {
    FromTo,
    DepArr,
    Budget,
    People
  }
}
</script>

<style scoped>
  template {
    height: 100%;
  }

  .home {
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }

  .main-board {
    z-index: 1;
    background-color: white;
    outline: none;
    border-radius: 15px;
    
    height: 50%;
    width: 90%;
    margin-top: 12%;

    display: flex; 
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .motto {
    font-size: 55px;
    font-weight: 100;
    margin-left: -30%;
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }

  .budget-btn {
    
  }
</style>


