<script>
import { Line } from "vue-chartjs";

//   mounted() {
//     this.gradient = this.$refs.canvas
//       .getContext("2d")
//       .createLinearGradient(0, 0, 0, 450);
//     this.gradient2 = this.$refs.canvas
//       .getContext("2d")
//       .createLinearGradient(0, 0, 0, 450);
//
//     this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
//     this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
//     this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");
//
//     this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
//     this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
//     this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
//
//     this.renderChart(
//       {
//         //labels: this.labels,
//         labels: [36, 15, 20],
//         datasets: [
//           this.dataset,
//           {
//             label: "Data Two",
//             borderColor: "#05CBE1",
//             pointBackgroundColor: "white",
//             pointBorderColor: "white",
//             borderWidth: 1,
//             backgroundColor: this.gradient2,
//             data: this.priceArr,
//           },
//         ]
//       },
//     );
//   },
// };

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
