<template>
  <v-card tile outlined
          max-width="344"
          @mousedown="dialog = true"
          @mouseup="dialog = false"
  >
    <PriceChartDialog :dialog="dialog" :curr="curr"></PriceChartDialog>
    <CurrencyName :curr="curr" />
    <v-card-title class="justify-center">
      ${{ curr.price_usd }}
    </v-card-title>

    <v-card-subtitle class="justify-center d-flex">
      <v-row v-if="curr.user_id">
        <v-col>Total: ${{ total.toFixed(4) }} </v-col>
        <v-col>
          {{ profitText }}:
          <span :style="{ color: numbersColor(this.profit)}">
            ${{ Math.abs(profit.toFixed(4)) }}
          </span>
        </v-col>
      </v-row>
      <div v-else>
        inf
      </div>
    </v-card-subtitle>
    <v-card-text>
      <div>как это рассчитывается я не уверен</div>
      <div v-if="curr.user_id">
        <div
          class="text-center"
          :style="{ color: numbersColor(percentChange)}"
        >
          <v-icon :color="numbersColor(percentChange)">{{ changeIcon }}</v-icon>
          {{ Math.abs(percentChange).toFixed(4) }} %
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import CurrencyName from './CurrencyName';
import PriceChartDialog from './PriceChartDialog';
import { mdiArrowUpBold, mdiArrowDownBold} from '@mdi/js';

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
    total() {
      return this.curr.amount * this.curr.price_usd;
    },
    profit() {
      return this.curr.valuation? (this.curr.amount * this.curr.price_usd - this.curr.valuation) : 0;
    },
    profitText() {
      return (this.profit < 0) ? 'Loss' : 'Profit';
    },
    percentChange() {
      return 100*(this.curr.price - this.curr.price_usd)/this.curr.price;
    },
    changeIcon() {
      return (this.percentChange < 0) ? mdiArrowDownBold : mdiArrowUpBold;
    }
  },

  methods: {
    numbersColor(num) {
      return (num < 0) ? '#DC143C' : 'green';
    },
  }
};
</script>

<style scoped>

</style>
