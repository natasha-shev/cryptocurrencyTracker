<template>
  <JSCharting
    v-if="loaded"
    :options="chartOptions"
    class="columnChart"
  ></JSCharting>
  <div v-else class="text-center">
    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>

<script>
import JSCharting from 'jscharting-vue';
import api from '../api';

export default {
  name: 'PortfolioChart',
  data() {
    return {
      loaded: false,
      chartOptions: {
        legend: {
          template: '%icon %name',
          position: 'inside top left'
        },
        defaultPoint_tooltip:
          'Date <b>%xValue</b> <br/>' +
          'Total <b>%yValue</b>',
        defaultPoint_marker_type: 'none',
        xAxis: {
          crosshair_enabled: true,
          label_text: "Date",
        },
        yAxis: {
          label_text: "Total",
          formatString: 'c',
          crosshair: {
            enabled: true,
            snapToData: true,
          },
        },
        debug: true,
        type: 'line',
        series: [
          {
            name: 'Portfolio',
            points: []
          }
        ]
      }
    };
  },
  components: {
    JSCharting
  },

  beforeCreate() {
    api.getTotal().then(response => {
      this.chartOptions.series[0].points = response.data.map((value) => {
        return [new Date(value.datetime), value.total];
      });
      this.loaded = true;
      //console.log(new Date(response.data[0].datetime));
    });
  }
};
</script>

<style>
.columnChart {
  height: 300px;
}
</style>
