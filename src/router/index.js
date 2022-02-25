import Vue from 'vue';
import VueRouter from 'vue-router';
import CurrenciesList from '../components/CurrenciesList.vue';
import store from '../store';
import AllCurrenciesList from '../components/AllCurrenciesList';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: AllCurrenciesList,
    name: 'Home',
  },
  {
    path: '/favourites',
    component: CurrenciesList,
    name: 'Fav',
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
    next('/');
  //} else if (!to.meta.requiresAuth && store.getters.isLoggedIn) {
    //next({ name: 'Home' });
  } else { next(); }
});

export default router;
