<template>
<router-link to="/login">
  <button @click="logout()">Logout</button>
</router-link>
</template>

<script>
export default {
  name: "LogoutButton",

  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$store.commit('logout');
    }
  }
}
</script>

<style scoped>

</style>