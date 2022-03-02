import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token'), // || '',
    user: {},
    coins: []
  },
  mutations: {
    auth_success(state, token) {
      state.status = 'success';
      state.token = token;
      // state.user = user //мой бэк не возвращает юзера (пока что)
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
    coins_filling(state, coins) {
      state.coins = coins;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isLoggedIn: state => !!state.token,
    coinsGetter: state => state.coins
  }
});
