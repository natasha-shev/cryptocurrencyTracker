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
      <div v-if="this.$route.name == 'Portfolio'" class="ml-10">
        <router-link to="/" style="text-decoration: none">
          <v-btn>All coins</v-btn>
        </router-link>
      </div>
      <div v-if="this.$route.name == 'Home'">
        <router-link to="/portfolio" style="text-decoration: none">
          <v-btn>My coins</v-btn>
        </router-link>
      </div>
    </div>

    <v-spacer></v-spacer>

    <div v-if="this.$store.getters.isLoggedIn">
      <LogoutButton />
    </div>

    <div v-else>
      <v-row justify="end">
        <v-col>
          <Login></Login>
        </v-col>
        <v-col>
          <RegisterDialog></RegisterDialog>
        </v-col>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script>
import LogoutButton from './LogoutButton';
import Login from './Login';
import RegisterDialog from './RegisterDialog';

export default {
  name: 'Navbar',
  components: {
    RegisterDialog,
    Login,
    LogoutButton
  },
  data() {
    return {
      dialog: false,
    };
  }
};
</script>

<style scoped>

</style>
