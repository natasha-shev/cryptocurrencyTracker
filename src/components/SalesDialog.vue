<template>
  <v-data-table
    v-if="loaded"
    :headers="headers"
    :items="salesData"
    hide-default-footer
  >

  </v-data-table>
  <div v-else class="text-center">
    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>

<script>
import api from '../api';

export default {
  name: 'SalesDialog',

  data() {
    return {
      loaded: false,
      headers: [
        {
          text: 'Coin',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Price, USD', value: 'price' },
        { text: 'Amount', value: 'amount' },
        { text: 'Date', value: 'date' },
        { text: 'Income, USD', value: 'income' },
      ],
      salesData: [],
    };
  },

  beforeCreate() {
    api.getSales().then(response => {
      this.salesData = response.data;
      this.loaded = true;
    });
  }
};
</script>

<style scoped>

</style>
