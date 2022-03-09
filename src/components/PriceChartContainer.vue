<template>
  <PriceChart v-if="loaded"
              :chartdata="chartdata"
              :options="options"
  ></PriceChart>
</template>

<script>
import PriceChart from './PriceChart';
import api from '../api';

export default {
  name: 'PriceChartContainer',
  components: { PriceChart },
  props: ['curr'],
  data() {
    return {
      loaded: false,
      chartdata: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    };
  },

  async mounted() {
    this.loaded = false;
    try {
      const response = await api.getHistory(this.curr.id);

      this.chartdata = {
        labels: this.labels = response.data.map(price => price.created_at),
        dataset:
          {
            data: response.data.map(price => price.price_usd)
          }
      };
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<style scoped>

</style>
