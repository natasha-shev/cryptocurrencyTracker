<template>
<div>
  <CurrencyName :image="curr.CoinInfo.ImageUrl" :name="curr.CoinInfo.Name" :full-name="curr.CoinInfo.FullName"/>
  <div>$ {{curr.RAW.USD.PRICE}}</div>
</div>
</template>

<script>
import CurrencyName from "./CurrencyName";

export default {
  name: "CurrencyPane",
  components: {
    CurrencyName
  },
   props: ['curr'],
}
</script>

<style scoped>

</style>