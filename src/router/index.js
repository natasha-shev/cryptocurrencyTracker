import Vue from 'vue'
import VueRouter from 'vue-router'
import CurrenciesList from '../components/CurrenciesList.vue'
import Login from '../components/Login'
import Register from '../components/Register'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: CurrenciesList,
    name: 'Home',
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) next('/login')
  else if (!to.meta.requiresAuth && store.getters.isLoggedIn) next({ name: 'Home' })
  else next()
})

export default router
