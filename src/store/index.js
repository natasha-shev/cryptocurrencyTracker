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
      state.coins = state.coins.map(c => {
        c.amount = null;
        c.date = null;
        c.user_id = null;
        c.price = null;
        c.coin_id = null;
        return c;
      });
    },
    coins_filling(state, coins) {
      state.coins = coins;
    },
    add_coin(state, payload) {
      let coin = state.coins.find(c => c.id == payload.coin_id);

      coin.price = payload.price;
      coin.amount = payload.amount;
      coin.date = payload.date;
      coin.user_id = 1;
      coin.action = 'buy';
    },
    remove_coin(state, coin_id) {
      let coin = state.coins.find(c => c.id == coin_id);

      coin.user_id = null;
      coin.price = null;
      coin.amount = null;
      coin.date = null;
      coin.action = null;
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
