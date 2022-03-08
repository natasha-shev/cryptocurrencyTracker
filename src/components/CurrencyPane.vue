<template>
  <v-card tile outlined
          max-width="344"
          @mousedown="dialog = true"
          @mouseup="dialog = false"
  >
    <PriceChartDialog :dialog="dialog" :curr="curr"></PriceChartDialog>
    <CurrencyName :curr="curr" />
    <v-card-title class="justify-center">
      $ {{ curr.price_usd }}
    </v-card-title>

    <v-card-subtitle class="justify-center d-flex">
      <v-row v-if="curr.user_id">
        <v-col>Total: {{ curr.amount }} </v-col>
        <v-col>Profit: ${{ profit.toFixed(3) }}</v-col>
      </v-row>
      <div v-else>
        inf
      </div>
    </v-card-subtitle>
    <v-card-text>
      <v-row>Change% это для всех или для избранных и какая именно change</v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CurrencyName from './CurrencyName';
import PriceChartDialog from './PriceChartDialog';

export default {
  name: 'CurrencyPane',
  components: {
    PriceChartDialog,
    CurrencyName
  },
  props: ['curr'],

  data() {
    return {
      profit: this.curr.amount * (this.curr.purchase_price - this.curr.price_usd),
      dialog: false,
    };
  }
};
</script>

<style scoped>

</style>
