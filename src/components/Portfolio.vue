<template>
  <CurrenciesList :currencies="currencies"></CurrenciesList>
</template>

<script>
import CurrenciesList from './CurrenciesList';
import getCoinsList from '../api';
export default {
  name: 'Favourites',
  components: { CurrenciesList },

  data() {
    return {
      currencies: [],
    };
  },

  created() {
    getCoinsList(true).then(response => { this.currencies = response.data; });
  }
};
</script>

<style scoped>

</style>
