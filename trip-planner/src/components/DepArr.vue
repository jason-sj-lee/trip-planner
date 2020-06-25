<template>
  <v-card class="dep-arr" outlined>
    <calender></calender>
  </v-card>
</template>

<script>
import Calender from '@/components/Calendar'

export default {
  components: {
    Calender
  }
}
</script>

<style scoped>
  .dep-arr {
    flex-grow: 0.75;
    height: 100px;
    margin: 40px;
  }
</style>