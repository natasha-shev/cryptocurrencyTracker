<template>
<div>
  <div >
    <CurrencyPane class="pane" v-for="curr of currencies" :key="curr.CoinInfo.Id"
                  :curr="curr"></CurrencyPane>
  </div>
</div>
</template>

<script>
import CurrencyPane from "./CurrencyPane";
export default {
  name: "CurrenciesList",
  props: ['currencies'],
  components: {CurrencyPane},
}
</script>

<style scoped>
.pane {
  margin-bottom: 25px;
  margin-top: 25px;
  border: 10px solid;
  width: 35%;
}
</style>