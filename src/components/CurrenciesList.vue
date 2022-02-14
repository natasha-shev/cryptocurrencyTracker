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
  //props: ['currencies'],
  components: {CurrencyPane},


  data() {
    return {
      currencies: [],
    }
  },

  mounted() {
    fetch('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD')
        .then(response => response.json())
        .then(json => {
          this.currencies = json.Data;
          console.log(this.currencies) //для провирки
        })
  },

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
}
</style>