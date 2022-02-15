import {createApp} from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state: {
        status: '',
        token: localStorage.getItem('token'), //|| '',
        user : {}
    },

    mutations: {
        auth_success(state, token){
            state.status = 'success'
            state.token = token
            //state.user = user //мой бэк не возвращает юзера (пока что)
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
    },

    getters: {
        isLoggedIn: state => !!state.token, //!!null == false
        //authStatus: state => state.status, //разобраться это вообще зачем у них в примере былооо
    },


});

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');

export default store;