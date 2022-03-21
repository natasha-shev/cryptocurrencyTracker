<template>
  <JSCharting :options="chartOptions" class="columnChart"></JSCharting>
</template>

<script>
import JSCharting from 'jscharting-vue';

export default {
  name: 'PortfolioChart',
  data() {
    return {
      chartOptions: {
        defaultPoint_marker_type: 'none',
        type: 'line',
        series: [
          {
            points: [
              { x: 1, y: 50 },
              { x: 8, y: 30 },
              { x: 10, y: 50 }
            ]
          }
        ]
      }
    };
  },
  components: {
    JSCharting
  },

  methods: {

  }
};
</script>

<style>
.columnChart {
  height: 300px;
}
</style>
