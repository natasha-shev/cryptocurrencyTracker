<template>
  <div>
    <AppTitle id="title"/>
    <!--  <CurrenciesList :currencies="currencies"></CurrenciesList>-->
    <router-link to="/login">Login</router-link>
    <router-view />
  </div>
</template>

<script>
import AppTitle from './components/AppTitle'
// import CurrenciesList from "./components/CurrenciesList";

export default {
  name: 'App',
  components: {
    AppTitle // CurrenciesList
  }
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
