<template>
  <v-container>
    <v-responsive width="45%" class="ml-auto mr-auto">
    <v-form>
      <v-text-field v-model="email"
                    label="Email"
                    :rules="mailRules"
                    hide-details="auto"
                    ref="emailField"
      ></v-text-field>
      <v-text-field v-model="password"
                    label="Password"
                    type="password"
                    :rules="passRules"
                    ref="passField"
      ></v-text-field>
      <div  class="error--text">
        {{loginError}}
      </div>
    </v-form>
    </v-responsive>
    <div class="mt-3 mb-3 d-flex d-flex justify-center">
      <v-btn v-on:click="postLogin()">Login</v-btn>
    </div>
    <div class="d-flex justify-center">
      <div class="mt-3 mb-3 d-flex flex-column">
        <div>
          Don't have an account?
        </div>
        <router-link class="d-flex justify-center" style="text-decoration: none" to="/register">
          <v-btn text color="#3d87d1">Sign up</v-btn>
        </router-link>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',

  data () {
    return {
      password: '',
      email: '',
      mailRules: [
        value => !!value || 'Required.'
      ],
      passRules: [
        value => !!value || 'Required.'
      ],
      loginError: ''
    }
  },

  methods: {
    postLogin () {
      if (this.email === '') {
        this.$refs.emailField.focus()
        return
      }
      if (this.password === '') {
        this.$refs.passField.focus()
        return
      }
      const self = this
      axios.post('http://127.0.0.1:8000/api/login', {
        email: this.email,
        password: this.password
      })
        .then(function (response) {
          console.log(response)
          const token = localStorage.setItem('token', response.data.access_token)
          self.$store.commit('auth_success', { token: token, status: 'success' })
          self.$router.push('/')
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            self.loginError = error.response.data.message
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    }
  }
}
</script>

<style scoped>

</style>
