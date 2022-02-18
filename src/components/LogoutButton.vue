<template>
  <router-link to="/login">
    <v-btn @click="logout()">Logout</v-btn>
  </router-link>
</template>

<script>
export default {
  name: 'LogoutButton',
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped>

</style>
