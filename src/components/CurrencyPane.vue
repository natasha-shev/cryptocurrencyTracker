<template>
  <v-card tile outlined
    max-width="344">
    <CurrencyName :CoinInfo="curr.CoinInfo"/>
    <v-card-title class="justify-center">
      $ {{curr.RAW.USD.PRICE}}
    </v-card-title>

    <v-card-subtitle class="justify-center d-flex">
      здесь будет другая инфа {{upd}}
    </v-card-subtitle>
  </v-card>
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
