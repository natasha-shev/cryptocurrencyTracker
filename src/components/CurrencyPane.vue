<template>
<div>
  <CurrencyName :image="curr.CoinInfo.ImageUrl" :name="curr.CoinInfo.Name" :full-name="curr.CoinInfo.FullName"/>
  <div>$ {{curr.RAW.USD.PRICE}}</div>
  <div>Last update: {{upd}} hours ago</div>

</div>
</template>

<script>
import CurrencyName from "./CurrencyName";

export default {
  data() {
    return {
      upd: new Date(Date.now() - this.curr.RAW.USD.LASTUPDATE).getHours(),
    }
  },
  name: "CurrencyPane",
  components: {
    CurrencyName
  },
   props: ['curr'],
}
</script>

<style scoped>

</style>