<template>
  <CurrenciesList :currencies="currencies"></CurrenciesList>
</template>

<script>
import CurrenciesList from '../components/CurrenciesList';
// чому так я не понимаю надо разобраться почему без импорта стора не работает
import store from '../store';
export default {
  name: 'All',
  components: { CurrenciesList },

  computed:  {
    currencies: () => {
        return store.getters.coinsGetter;
    }
  }
};
</script>

<style scoped>

</style>
