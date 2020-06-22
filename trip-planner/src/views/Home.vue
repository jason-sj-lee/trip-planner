<template>
  <div class="home">
    <p class="motto">Where are we <strong>going</strong> today?</p>
    <div class="main-board">
      <from-to></from-to>
      <from-to></from-to>
      <dep-arr></dep-arr>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FromTo from '@/components/FromTo'
import DepArr from '@/components/DepArr'

export default {
  
  name: 'Home',
  components: {
    FromTo,
    DepArr
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
    
    height: 40%;
    width: 80%;
    margin-top: 12%;

    display: flex; 
    flex-direction: row;
    justify-content: space-evenly;
  }

  .motto {
    font-size: 55px;
    font-weight: 100;
    margin-left: -30%;
  }
</style>


