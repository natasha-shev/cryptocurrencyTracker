import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import All from '../components/All';
import Favourites from '../components/Favourites';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: All,
    name: 'Home',
  },
  {
    path: '/favourites',
    component: Favourites,
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
