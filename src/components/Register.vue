<template>
  <div>
    <v-btn
      @click.stop="dialog = true"
    >
      Sign up
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="390"
    >
      <v-card>
        <v-card-title class="text-h5">
          Registration
        </v-card-title>

        <v-card-text>
          <v-form>
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
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            @click.prevent.stop="postRegister()"
          >
            Sign up
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
      regError: [],
      dialog: false
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
          self.$router.push('/portfolio');
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
