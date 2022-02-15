import {createRouter, createWebHistory} from 'vue-router'
//import App from '@/App'
import Login from './components/Login'
import CurrenciesList from "./components/CurrenciesList";
import store from './main.js';

const routes = [
    {
        path: '/',
        component: CurrenciesList,
        meta: { requiresAuth: true }
    },

    {
        path: '/login',
        component: Login
    }
];

const router =  createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => { //from
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            path: '/login',
        }
    }
})

export default router;
