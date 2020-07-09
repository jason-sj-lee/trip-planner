<template>
  <div class="list">
    <v-icon x-large>mdi-airplane</v-icon>
    <div v-for="flight in info" :key="flight.id">
      {{ flight.price.total}}
    </div>
      
  </div>
</template>

<script>
import { axios } from "@/plugins/axios";
export default {
  props: {
    atoken: { required: true, type: String }
  },

  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .request({
        url: "/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2020-08-01&returnDate=2020-08-05&adults=1",
        method: "get",
        baseURL: "https://test.api.amadeus.com/v2",
        headers: {
          'Authorization': 'Bearer ' + this.atoken
        }
      })
      .then(response => {
        console.log(response.data);
        this.info = response.data.data
      });
  }

};
</script>

<style scoped>
.list {
  border: red 1px solid;
  width: 30%;
  height: 100%;

}
</style>