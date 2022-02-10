<template>
  <AppTitle id="title"/>
  <CurrenciesList :currencies="currencies"></CurrenciesList>
</template>

<script>

import AppTitle from "./components/AppTitle";
import CurrenciesList from "./components/CurrenciesList";

export default {
  name: 'App',
  components: {
    AppTitle,  CurrenciesList
  },

  data() {
    return {
      currencies: [],
    }
  },

  mounted() {
    fetch('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD')
        .then(response => response.json())
        .then(json => {this.currencies = json.Data;
          console.log(this.currencies) //для провирки
        })
  },


}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
