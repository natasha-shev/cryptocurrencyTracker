<template>
<div>
<!--  будем использовать v-card??-->
  <CurrencyName :CoinInfo="curr.CoinInfo"/>
  <div>$ {{curr.RAW.USD.PRICE}}</div>
  <div>Last update: {{upd}} hours ago</div>
</div>
</template>

<script>
import CurrencyName from './CurrencyName'

export default {
  name: 'CurrencyPane',
  data () {
    return {
      upd: new Date(Date.now() - this.curr.RAW.USD.LASTUPDATE).getHours()
    }
  },
  components: {
    CurrencyName
  },
  props: ['curr']
}
</script>

<style scoped>

</style>
