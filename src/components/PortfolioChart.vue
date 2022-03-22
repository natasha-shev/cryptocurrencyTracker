<template>
  <div>
    <JSCharting
      v-if="loaded && isChartDataExists"
      :options="chartOptions"
      class="columnChart"
    ></JSCharting>
    <div v-else-if="!loaded" class="text-center">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <div v-else>
      Nothing to show
    </div>
  </div>
</template>

<script>
import JSCharting from 'jscharting-vue';
import api from '../api';

export default {
  name: 'PortfolioChart',
  components: {
    JSCharting
  },
  data() {
    return {
      loaded: false,
      isChartDataExists: false,
      chartOptions: {
        axisToZoom: 'xy',
        legend: {
          template: '%icon %name',
          position: 'inside top left'
        },
        defaultPoint_tooltip:
          'Date <b>%xValue</b> <br/>' +
          'Total <b>%yValue</b>',
        defaultPoint_marker_type: 'none',
        xAxis: {
          label_text: "Date",
          crosshair: {
            enabled: true,
            snapToData: true,
          },
        },
        yAxis: {
          label_text: "Total",
          formatString: 'c',
        },
        debug: true,
        type: 'line',
        series: [
          {
            line: { width: 1.5},
            name: 'Portfolio',
            points: []
          }
        ]
      }
    };
  },

  beforeCreate() {
    api.getTotal().then(response => {
      this.loaded = true;
      if (response.data.length == 0) {
        return;
      }
      this.chartOptions.series[0].points = response.data.map((value) => {
        return [new Date(value.datetime), value.total];
      });
      this.isChartDataExists = true;
      console.log(response.data);
    });
  }
};
</script>

<style>
.columnChart {
  height: 300px;
}
</style>
