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
        <v-col>{{ profitText }}: <span :style="{ color: profitColor}">$ {{ Math.abs(profit.toFixed(4)) }}</span></v-col>
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
      dialog: false,
    };
  },

  computed: {
    profit() {
      return this.curr.amount * (this.curr.price_usd - this.curr.purchase_price);
    },
    profitText() {
      return (this.profit < 0) ? 'Loss' : 'Profit';
    },
    profitColor() {
      return (this.profit < 0) ? 'crimson' : 'green';
    }
  }
};
</script>

<style scoped>

</style>
