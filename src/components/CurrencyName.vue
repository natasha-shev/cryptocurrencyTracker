<template>
  <v-card class="primary" tile>
    <img :src = "'https://www.cryptocompare.com/' + CoinInfo.ImageUrl">
    <strong id="names">{{CoinInfo.Name}} | {{CoinInfo.FullName}}</strong>
  </v-card>
</template>

<script>
export default {
  name: 'CurrencyName',
  props: ['CoinInfo']
}
</script>

<style scoped>
img {
  width: 50px;
  padding: 5px 10px;
}
div {
  display: flex;
  height: 100%;
}
#names {
  align-self: center;
}
</style>
