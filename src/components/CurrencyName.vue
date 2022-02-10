<template>
<img src = "image">
<span>{{name}} | {{fullName}}</span>
</template>

<script>
export default {
  name: "CurrencyName",
  props: ["image", "name", "fullName"]
}
</script>

<style scoped>

</style>