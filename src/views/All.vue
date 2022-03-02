<template>
<CurrenciesList :currencies="currencies"></CurrenciesList>
</template>

<script>
import CurrenciesList from '../components/CurrenciesList';
import api from '../api';
export default {
  name: 'All',
  components: { CurrenciesList },

  data() {
    return {
      currencies: [],
    };
  },

  created() {
    api.getCoinsList().then(response => { this.currencies = response.data; });
  }
};
</script>

<style scoped>

</style>
