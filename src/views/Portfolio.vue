<template>
  <div>
    <v-btn tile depressed
           @mousedown="addDialog = true"
           @mouseup="addDialog = false"
    >
      <AddCoinDialog :dialog="addDialog"></AddCoinDialog>
      Add new coin
    </v-btn>

    <v-btn
      tile
      depressed
      @click.stop="portfolioDialog = true"
    >
      Statistics
    </v-btn>

    <v-dialog
      v-model="portfolioDialog"
      max-width="800"
    >
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>

        <v-card-text>
          <PortfolioChart></PortfolioChart>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            tile
            @click="portfolioDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

    <CurrenciesList class="mt-6"
                    :currencies="currencies"
    ></CurrenciesList>
  </div>
</template>

<script>
import CurrenciesList from '../components/CurrenciesList';
import store from '../store';
import AddCoinDialog from '../components/AddCoinDialog';
import PortfolioChart from '../components/PortfolioChart';
export default {
  name: 'Favourites',
  components: { PortfolioChart, AddCoinDialog, CurrenciesList },

  data() {
    return {
      addDialog: false,
      portfolioDialog: false
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
