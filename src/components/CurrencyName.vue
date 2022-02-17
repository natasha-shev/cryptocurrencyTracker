<template>
  <div>
    <img :src = "'https://www.cryptocompare.com/' + image">
    <strong id="names">{{name}} | {{fullName}}</strong>
  </div>
</template>

<script>
export default {
  name: 'CurrencyName',
  props: ['image', 'name', 'fullName']
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
