<template>
  <div>
    <v-btn
      @click.stop="dialog = true"
    >
      Login
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="390"
    >
      <v-card>
        <v-card-title class="text-h5">
          Sign in to app
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-text-field ref="emailField"
                          v-model="email"
                          label="Email"
                          :rules="rules"
                          hide-details="auto"
            ></v-text-field>
            <v-text-field ref="passField"
                          v-model="password"
                          label="Password"
                          type="password"
                          :rules="rules"
            ></v-text-field>
            <div class="error--text">
              {{ loginError }}
            </div>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            @click="postLogin()"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',

  data() {
    return {
      dialog: false,
      password: '',
      email: '',
      rules: [
        value => !!value || 'Required.'
      ],
      loginError: ''
    };
  },

  methods: {
    postLogin() {
      if (this.email === '') {
        this.$refs.emailField.focus();
        return;
      }
      if (this.password === '') {
        this.$refs.passField.focus();
        return;
      }
      const self = this;

      axios.post('http://127.0.0.1:8000/api/login', {
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
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            self.loginError = error.response.data.message;
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    }
  }
};
</script>

<style scoped>

</style>
