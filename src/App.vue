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

  created() {
    api.getCoinsList().then(response => {
      this.$store.commit('coins_filling', response.data);
    });
  },
};
</script>
