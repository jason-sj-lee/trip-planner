<template>
  <div class="list">
    <h1>flights</h1>
    <div class="flight" v-for="flight in flights" :key="flight.id">
      <div class="departure">
        <v-icon large>mdi-airplane-takeoff</v-icon>
        <li>{{ (flight.itineraries[0].segments[0].departure.at).substring(11) }}</li>
        <li>{{ (flight.itineraries[0].segments[flight.itineraries[0].segments.length -1].arrival.at).substring(11) }}</li>
        <li>{{ (flight.itineraries[0].duration).substr(2) }}</li>
        <li>{{ flight.itineraries[0].segments.length }} stops</li>
      </div>
      <div class="returning">
        <v-icon large>mdi-airplane-landing</v-icon>
        <li>{{ (flight.itineraries[1].segments[0].departure.at).substring(11) }}</li>
        <li>{{ (flight.itineraries[1].segments[flight.itineraries[0].segments.length -1].arrival.at).substring(11) }}</li>
        <li>{{ (flight.itineraries[1].duration).substr(2) }}</li>
        <li>{{ flight.itineraries[1].segments.length }} stops</li>
      </div>
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
    };
  },
  mounted() {
    axios
      .request({
        url:
          "/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2020-08-01&returnDate=2020-08-05&adults=1&max=5",
        method: "get",
        baseURL: "https://test.api.amadeus.com/v2",
        headers: {
          Authorization: "Bearer " + this.atoken
        }
      })
      .then(response => {
        console.log(response.data);
        this.flights = response.data.data;
      });
  }
};
</script>

<style scoped>
.list {
  width: 30%;
  height: 100%;
}

.flight {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>