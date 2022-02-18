<template>
  <div>
    <router-link to="/login"><v-btn>Login</v-btn></router-link>
  <form ref='form' class='register-form'>
    <h2>Registration</h2>
    <div class="form-group" >
      <label for="firstname">Name</label>
      <input type="text" v-model="name" id='firstname' placeholder="Name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" v-model="email" id='email' placeholder="Email">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input autocomplete="off" :type="type" v-model="password" placeholder="Password" id='password'>
      <v-btn depressed flat color="white" @click.prevent="toggleVisibility()">
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </div>
    <button @click.prevent.stop="postRegister()">Register</button>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mdiEye, mdiEyeOff } from '@mdi/js'

export default {
  name: 'Register',

  data () {
    return {
      name: '',
      email: '',
      password: '',
      btnText: 'show',
      type: 'password',
      icon: mdiEye
    }
  },

  methods: {
    postRegister () {
      const self = this
      axios.post('http://127.0.0.1:8000/api/register', {
        name: this.name,
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
          console.log(error)
        })
      // console.log(localStorage.getItem('token'));
    },

    toggleVisibility () {
      if (this.type === 'password') {
        this.type = 'text'
        this.icon = mdiEyeOff
      } else {
        this.type = 'password'
        this.icon = mdiEye
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

*, *::before, *::after {
  box-sizing: border-box;
}

[v-cloak] {
  opacity: 0;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'PT Sans', sans-serif;
  background:#e0e0e0;
}

button {
  transition: 250ms;
  display: block;
  margin: 2em 0 2em auto;
  padding: .6em 1em;
  font-size: inherit;
  cursor: pointer;
  color:white;
  border:none;
  background-color: #32a860;
}

form h2, header h2 {
  text-align: center;
}

.register-form {
  margin: 2em 0;
  padding:1em;
}

.form-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}

label {
  flex:1;
  text-align: right;
  margin-right: 2em;
}

input {
  font-size: inherit;
  border:none;
  background:whitesmoke;
  font-family:inherit;
  padding:.4em;
  flex:1.5;
}
</style>
