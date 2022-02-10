<template>
<img :src = "'https://www.cryptocompare.com/' + image">
<span>{{name}} | {{fullName}}</span>
</template>

<script>
export default {
  name: "CurrencyName",
  props: ["image", "name", "fullName"]
}
</script>

<style scoped>
img {
  width: 50px;
  padding: 5px 10px;
}
</style>