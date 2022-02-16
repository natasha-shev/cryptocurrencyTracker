<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card px-5 py-5" id="form1">
          <div class="form-data">
<!--            <div class="form-data" v-if="!submitted">-->
            <div class="forms-inputs mb-4"> <span>Email</span>
              <input  type="email" v-model="email" class="form-control">
            </div>
            <div class="forms-inputs mb-4"> <span>Password</span>
              <input autocomplete="off" type="password" v-model="password" class="form-control">
            </div>
            <div class="mb-3">
              <button v-on:click="postLogin()">Login</button>
            </div>
          </div>
          <router-link to="/register">
            <button>Registration</button>
          </router-link>
<!--          <div class="success-data" v-else>-->
<!--            <div class="text-center d-flex flex-column"> <i class='bx bxs-badge-check'></i> <span class="text-center fs-1">You have been logged in <br> Successfully</span> </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Login",

  data() {
    return {
      password: '',
      email: '',
    }
  },

  methods: {
    postLogin() {
      let self = this;
      axios.post('http://127.0.0.1:8000/api/login', {
        email: this.email,
        password: this.password
      })
    .then(function (response) {
      console.log(response);
      const token = localStorage.setItem('token', response.data.access_token);
      self.$store.commit('auth_success', {token: token, status: "success"} );
      self.$router.push('/');
      })
          .catch(function (error) {
            console.log(error);
          });
      //console.log(localStorage.getItem('token'))
    }
  }
}
</script>

<style scoped>

</style>