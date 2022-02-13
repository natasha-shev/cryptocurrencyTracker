import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App);
app.use(router);
app.mount('#app');
//app.$router = router;
// new Vue({
//     router,
//     render: h => h(App),
// }).$mount('#app')