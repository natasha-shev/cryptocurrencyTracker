<template>
<CurrenciesList :currencies="currencies"></CurrenciesList>
</template>

<script>
import CurrenciesList from './CurrenciesList';
import getCoinsList from '../api';
export default {
  name: 'All',
  components: { CurrenciesList },

  data() {
    return {
      currencies: [],
    };
  },

  created() {
    getCoinsList(false).then(response => { this.currencies = response.data; });
  }
};
</script>

<style scoped>

</style>
