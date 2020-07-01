<template>
  <div class="about">
    <results-plane></results-plane>
    <results-hotel></results-hotel>
    <results-food></results-food>
  </div>
</template>

<script>
import ResultsPlane from "../components/ResultsPlane";
import ResultsHotel from "../components/ResultsHotel";
import ResultsFood from "../components/ResultsFood";

import { axios } from "@/plugins/axios";

export default {
  name: "results",
  components: {
    ResultsPlane,
    ResultsHotel,
    ResultsFood
  },
  mounted() {
    axios
      .request({
        url: "/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2020-08-01&returnDate=2020-08-05&adults=2&includedAirlineCodes=TG&max=3",
        method: "get",
        baseURL: "https://test.api.amadeus.com/v2",
        headers: {
          'Authorization': 'Bearer Z9Eno4NPgeKk0gDYCToPINIojiTd' //'Bearer 12345asdf'
        }
      })
      .then(response => {
        console.log(response.data);
      });
  }
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-around;
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