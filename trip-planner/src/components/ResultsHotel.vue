<template>
  <div class="list">
    <v-icon x-large>mdi-bed</v-icon>
    <p>name: {{ this.name }}</p>
    <p>rating: {{ this.rating }} stars</p>
    <p>check-in: {{ this.checkInDate }}</p>
    <p>check-out: {{ this.checkOutDate }}</p>
    <p>price: {{ this.currency }} {{ this.price }}</p>
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
      name: '',
      rating: '',
      checkInDate: '',
      checkOutDate: '',
      currency: '',
      price: ''
    }
  },

  mounted() {
    axios
      .request({
        url: "/shopping/hotel-offers?cityCode=" + this.cityObj[this.$store.state.to] + "&adults=1&radius=5&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=PRICE",
        method: "get",
        baseURL: "https://test.api.amadeus.com/v2",
        headers: {
          'Authorization': 'Bearer ' + this.atoken
        }
      })
      .then(response => {
        console.log(response.data);
        console.log("name:", response.data.data[0].hotel.name);
        this.name = response.data.data[0].hotel.name;
        console.log("rating:", response.data.data[0].hotel.rating, "stars");
        this.rating = response.data.data[0].hotel.rating
        console.log("check-in:", response.data.data[0].offers[0].checkInDate);
        this.checkInDate = response.data.data[0].offers[0].checkInDate
        console.log("check-out:", response.data.data[0].offers[0].checkOutDate);
        this.checkOutDate = response.data.data[0].offers[0].checkOutDate
        console.log("price:", response.data.data[0].offers[0].price.currency, response.data.data[0].offers[0].price.total)
        this.currency = response.data.data[0].offers[0].price.currency
        this.price = response.data.data[0].offers[0].price.total
      });
  }
};
</script>

<style scoped>
.list {
  border: green 1px solid;
  width: 30%;
  height: 100%;
}
</style>