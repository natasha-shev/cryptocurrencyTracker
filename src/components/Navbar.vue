<template>
  <v-app-bar
    app
    color="primary"
  >
    <div class="d-flex align-center">
      <v-toolbar-title>Cryptocurrency App</v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
    <div v-if="this.$store.getters.isLoggedIn">
      <LogoutButton/>
    </div>
  </v-app-bar>
</template>

<script>
import LogoutButton from './LogoutButton'

export default {
  name: 'Navbar',
  components: {
    LogoutButton
  }
}
</script>

<style scoped>

</style>
