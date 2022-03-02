<template>
  <v-app>
    <Navbar/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import api from './api';

export default {
  name: 'App',
  components: {
    Navbar
  },

  // куда это девать
  created() {
    api.getCoinsList().then(response => {
      //console.log('response.data ' + response.data);
      this.$store.commit('coins_filling', response.data);
      //this.currencies = this.$store.getters.coinsGetter
    });
  },

  data() {
    return {
      currencies: [],
    };
  }
};
</script>
