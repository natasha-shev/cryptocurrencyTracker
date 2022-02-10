<template>
<div id="list">
  <div>
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
#list {
  display: flex;
  justify-content: center;
}
.pane {
  margin-bottom: 25px;
  margin-top: 25px;
  border: 10px solid;

  display: flex;
}
</style>