<template>
  <div class="list">
    <v-icon x-large>mdi-bed</v-icon>
  </div>
</template>

<script>
import { axios } from "@/plugins/axios";
export default {

  props: {
    atoken: { required: true, type: String }
  },

  mounted() {
    axios
      .request({
        url: "/shopping/hotel-offers?cityCode=PAR&adults=1&radius=5&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=PRICE",
        method: "get",
        baseURL: "https://test.api.amadeus.com/v2",
        headers: {
          'Authorization': 'Bearer ' + this.atoken
        }
      })
      .then(response => {
        console.log(response.data);
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