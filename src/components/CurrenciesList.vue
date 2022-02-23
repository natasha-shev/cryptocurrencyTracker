<template>
  <v-container>
    <v-responsive width="80%" class="ml-auto mr-auto">
      <v-row>
        <v-col v-for="(curr) of currencies" :key="curr.id"
               cols="4" class="d-flex justify-center align-content-center"
        >
          <v-responsive width="75%">
            <CurrencyPane class="pane mb-0" :curr="curr"></CurrencyPane>
          </v-responsive>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import CurrencyPane from './CurrencyPane';
import axios from 'axios';

export default {
  name: 'CurrenciesList',
  components: { CurrencyPane },

  data() {
    return {
      currencies: []
    };
  },

  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/coins')
      .then(response => {
        // JSON responses are automatically parsed.
        this.currencies = response.data;
        console.log(this.currencies);
      });
  }
};
</script>

<style scoped>

</style>
