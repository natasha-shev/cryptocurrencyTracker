<template>
  <div id="list">
    <div>
      <CurrencyPane class="pane" v-for="curr of currencies" :key="curr.CoinInfo.Id"
                    :curr="curr"></CurrencyPane>
    </div>
  </div>
</template>

<script>
import CurrencyPane from './CurrencyPane'
import axios from 'axios'

export default {
  name: 'CurrenciesList',
  components: { CurrencyPane },

  data () {
    return {
      currencies: []
    }
  },

  mounted () {
    axios
      .get('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD')
      .then(response => {
        // JSON responses are automatically parsed.
        this.currencies = response.data.Data
        console.log(this.currencies)
      })
  }
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
