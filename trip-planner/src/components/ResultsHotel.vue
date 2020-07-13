<template>
  <div class="list">
    <h1>hotels</h1>
    <v-card outlined v-for="(hotel) in hotels" :key="hotel.id">
      <v-card-title>{{ hotel.hotel.name }}</v-card-title>
      <v-card-subtitle>{{ hotel.hotel.rating}} stars</v-card-subtitle>
      <v-card-text>{{ hotel.hotel.description.text.substring(0,100)+"..."  }}</v-card-text>
      <v-card-title>{{ hotel.offers[0].price.total }} {{ hotel.offers[0].price.currency }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
import { axios } from "@/plugins/axios";
export default {
  props: {
    // atoken: { required: true, type: String },
    atoken: String,
    cityObj: Object
  },
  data: function() {
    return {
      hotels: null
    }
  },

  mounted() {
    axios
      .request({
        url: "/shopping/hotel-offers?cityCode=" + this.cityObj[this.$store.state.to] + "&adults=" + this.$store.state.adults+ "&radius=5&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&sort=NONE&view=FULL&checkInDate=" + this.$store.state.dep + "&checkOutDate=" + this.$store.state.arr,
        method: "get",
        baseURL: "https://test.api.amadeus.com/v2",
        headers: {
          'Authorization': 'Bearer ' + this.atoken
        }
      })
      .then(response => {
        console.log(response.data);
        this.hotels = response.data.data
        // console.log("name:", response.data.data[0].hotel.name);
        // this.name = response.data.data[0].hotel.name;
        // console.log("rating:", response.data.data[0].hotel.rating, "stars");
        // this.rating = response.data.data[0].hotel.rating
        // console.log("check-in:", response.data.data[0].offers[0].checkInDate);
        // this.checkInDate = response.data.data[0].offers[0].checkInDate
        // console.log("check-out:", response.data.data[0].offers[0].checkOutDate);
        // this.checkOutDate = response.data.data[0].offers[0].checkOutDate
        // console.log("price:", response.data.data[0].offers[0].price.currency, response.data.data[0].offers[0].price.total)
        // this.currency = response.data.data[0].offers[0].price.currency
        // this.price = response.data.data[0].offers[0].price.total
      });
  }
};
</script>

<style scoped>
.list {
  width: 30%;
  height: 100%;
}
</style>