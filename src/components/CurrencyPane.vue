<template>
  <v-card tile outlined
          max-width="344"
  >
    <CurrencyName :curr="curr" />
    <v-card-title class="justify-center">
      $ {{ curr.price_usd }}
    </v-card-title>

    <v-card-subtitle class="justify-center d-flex">
      здесь может быть другая инфа
    </v-card-subtitle>
  </v-card>
</template>

<script>
import CurrencyName from './CurrencyName';

export default {
  name: 'CurrencyPane',
  components: {
    CurrencyName
  },
  props: ['curr'],
};
</script>

<style scoped>

</style>
