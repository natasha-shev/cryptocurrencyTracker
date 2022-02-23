import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token'), // || '',
    user: {},
    favourites: []
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
    fetch_favourites(state, coins) {
      state.favourites = coins;
    },
    add_favourite(state, coin) {
      state.favourites.push(coin);
    },
    remove_favourite(state, coin) {
      state.favourites.splice(state.favourites.findIndex(fav => fav.id === coin.id), 1);
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isLoggedIn: state => !!state.token,
    isFavourite: (state) => (coin) => {
      return state.favourites.filter(fav => fav.id === coin.id).length;
    }
  }
});
