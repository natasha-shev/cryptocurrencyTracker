<template>
  <v-container>
    <v-responsive width="45%" class="ml-auto mr-auto">
      <v-form>
        <h1 class="font-weight-light d-flex justify-center">Registration</h1>
        <div>
          <v-text-field ref="nameField"
                        v-model="name"
                        label="Name"
                        :rules="rules"
                        hide-details="auto"
          ></v-text-field>
        </div>
        <div>
          <v-text-field ref="emailField"
                        v-model="email"
                        label="Email"
                        :rules="rules"
                        hide-details="auto"
          ></v-text-field>
        </div>
        <div class="d-flex flex-row mb-3 align-end">
          <v-text-field ref="passField"
                        v-model="password"
                        label="Password"
                        :rules="rules"
                        :type="type"
                        hide-details="auto"
          ></v-text-field>
          <v-btn tile depressed color="white" @click.prevent="toggleVisibility()">
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </div>
        <div class="error--text">
          {{ regError.join(' ') }}
        </div>
      </v-form>
    </v-responsive>
    <div class="mt-3 mb-3 d-flex d-flex justify-center">
      <v-btn @click.prevent.stop="postRegister()">Sign up</v-btn>
    </div>
    <div class="d-flex justify-center">
      <div class="mt-3 mb-3 d-flex flex-column">
        <div>
          Have an account?
        </div>
        <router-link class="d-flex justify-center" style="text-decoration: none" to="/login">
          <v-btn text color="#3d87d1">log in</v-btn>
        </router-link>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import { mdiEye, mdiEyeOff } from '@mdi/js';

export default {
  name: 'Register',

  data() {
    return {
      name: '',
      email: '',
      password: '',
      type: 'password',
      icon: mdiEye,
      rules: [
        value => !!value || 'Required.'
      ],
      regError: []
    };
  },

  methods: {
    postRegister() {
      if (this.name === '') {
        this.$refs.nameField.focus();
        return;
      }
      if (this.email === '') {
        this.$refs.emailField.focus();
        return;
      }
      if (this.password === '') {
        this.$refs.passField.focus();
        return;
      }
      const self = this;

      axios.post('http://127.0.0.1:8000/api/register', {
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then(function (response) {
          console.log(response);
          const token = localStorage.setItem('token', response.data.access_token);

          self.$store.commit('auth_success', { token: token, status: 'success' });
          self.$router.push('/');
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (error.response.data.error.email) {
              self.regError.push(error.response.data.error.email[0]);
            }
            if (error.response.data.error.password) {
              self.regError.push(error.response.data.error.password[0]);
              // error.response.data.error.password.forEach(item => self.regError += item)
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    },

    toggleVisibility() {
      if (this.type === 'password') {
        this.type = 'text';
        this.icon = mdiEyeOff;
      } else {
        this.type = 'password';
        this.icon = mdiEye;
      }
    }
  }
};
</script>

<style scoped>

</style>
