<template>
  <div>
    <v-btn
      @mousedown="dialog = true"
      @mouseup="dialog = false"
    >
      <AddCoinDialog :dialog="dialog"></AddCoinDialog>
      Add new coin
    </v-btn>

    <CurrenciesList :currencies="currencies"></CurrenciesList>
  </div>
</template>

<script>
import CurrenciesList from '../components/CurrenciesList';
import store from '../store';
import AddCoinDialog from '../components/AddCoinDialog';
export default {
  name: 'Favourites',
  components: { AddCoinDialog, CurrenciesList },

  data() {
    return {
      dialog: false,
    };
  },

  computed:  {
    currencies: () => {
      return store.getters.coinsGetter.filter(coin => coin.user_id);
    }
  }
};
</script>

<style scoped>

</style>
