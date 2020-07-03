<template>
  <div class="calender">
    <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="dates"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          
          <v-row class="container">
            <v-icon large class="cal-icon">event</v-icon>
            <v-col>
              <v-text-field 
                class="text-field"
                v-model="dateRangeText_1" 
                label="Departure"
                readonly 
                v-bind="attrs" 
                v-on="on">
              </v-text-field>
            </v-col>
            <v-icon large class="cal-icon">event</v-icon>
            <v-col>
              <v-text-field 
                class="text-field"
                v-model="dateRangeText_2" 
                label="Arrival"  
                readonly 
                v-bind="attrs" 
                v-on="on">
              </v-text-field>
            </v-col>
          </v-row>
        </template>
        <v-date-picker v-model="dates" range>
          <!-- <v-spacer></v-spacer> -->
          <v-btn text color="primary" @click="modal=false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(dates)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      dates: [new Date().toISOString().substr(0, 10), new Date().toISOString().substr(0, 10)],
      modal: ''
    }
  },
  computed: {
    dateRangeText_1 () { 
      this.$store.commit('depDate', this.dates[0])
      return this.dates[0];
    },
    dateRangeText_2 () {
      this.$store.commit('arrDate', this.dates[1])
      return this.dates[1];
    }
  }
}
</script>

<style scoped>
  .container {
    column-gap: 0px;
    margin-left: 0px;
  }

  .cal-icon {
    margin: 10px;
    margin-bottom: 20px;
    color: black;
  }

  .col {
    width: 160px;
  }

  .text-field {
    font-weight: bold;
    font-size: 30px;
    width: 165px;
  }
</style>