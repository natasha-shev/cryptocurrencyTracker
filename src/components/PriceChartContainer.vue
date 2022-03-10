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
        },
      }
    };
  },

  async mounted() {
    this.loaded = false;
    try {
      const response = await api.getHistory(this.curr.id);
      let data = response.data.map(d => {
        let dat = new Date(d.created_at);

        return {date: new Date(dat.toDateString()), price: d.price_usd};
      });

      const dataUnique = [...new Map(data.map(item =>
        [item['date'].getTime(), item])).values()];

      this.chartdata = {
        labels: dataUnique.map(d => {
          return `${d.date.getDate()}/${d.date.getMonth()+1}/${d.date.getFullYear()}`;
      }),
        dataset:
          {
            data: dataUnique.map(d => d.price)
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
