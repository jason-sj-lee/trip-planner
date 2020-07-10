<template>
  <div class="list">
    <h1>flights</h1>
    <h3>departing | returning</h3>
    <div class="flight" v-for="flight in flights" :key="flight.id">
      <div class="departure">
        <v-icon large>mdi-airplane-takeoff</v-icon>
        <li>{{ (flight.itineraries[0].segments[0].departure.at).substring(11,16) }} - {{ (flight.itineraries[0].segments[flight.itineraries[0].segments.length -1].arrival.at).substring(11,16) }}</li>
        <li>{{flight.itineraries[0].segments[0].departure.iataCode}} - {{flight.itineraries[0].segments[flight.itineraries[0].segments.length -1].arrival.iataCode}}</li>
        <li>{{ (flight.itineraries[0].duration).substr(2) }}</li>
        <li>{{ flight.itineraries[0].segments.length }} stops</li>
      </div>
      <div class="returning">
        <v-icon large>mdi-airplane-landing</v-icon>
        <li>{{ (flight.itineraries[1].segments[0].departure.at).substring(11,16) }} - {{ (flight.itineraries[0].segments[flight.itineraries[1].segments.length -1].arrival.at).substring(11,16) }}</li>
        <li>{{flight.itineraries[1].segments[0].departure.iataCode}} - {{flight.itineraries[1].segments[flight.itineraries[0].segments.length -1].arrival.iataCode}}</li>
        <li>{{ (flight.itineraries[1].duration).substr(2) }}</li>
        <li>{{ flight.itineraries[1].segments.length }} stops</li>
      </div>
      <h4 class="price">{{ flight.price.total }} &euro;</h4>
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
      flights: null
    };
  },
  mounted() {
    axios
      .request({
        url:
          "/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2020-08-01&returnDate=2020-08-05&adults=1&max=3",
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
  width: 400px;
  height: 100%;
}

.flight {
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 150px;
}

.price {
  margin-top: 60px;
}
</style>