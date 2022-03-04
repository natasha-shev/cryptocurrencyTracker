import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
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
    },
    add_coin(state, coin_id) {
      state.coins.find(c => c.id == coin_id).user_id = 1;
    },
    remove_coin(state, coin_id) {
      state.coins.find(c => c.id == coin_id).user_id = null;
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

export default store;
