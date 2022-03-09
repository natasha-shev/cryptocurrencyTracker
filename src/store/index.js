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
        c.bought_on = null;
        c.user_id = null;
        c.purchase_price = null;
        c.coin_id = null;
        return c;
      });
    },
    coins_filling(state, coins) {
      state.coins = coins;
    },
    add_coin(state, payload) {
      let coin = state.coins.find(c => c.id == payload.coin_id);

      coin.purchase_price = payload.buy_price;
      coin.amount = payload.amount;
      coin.bought_on = payload.buy_date;
      coin.user_id = 1;
    },
    remove_coin(state, coin_id) {
      let coin = state.coins.find(c => c.id == coin_id);

      coin.user_id = null;
      coin.purchase_price = null;
      coin.amount = null;
      coin.bought_on = null;
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
