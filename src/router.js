import {createRouter, createWebHistory} from 'vue-router'
//import App from '@/App'
import Login from './components/Login'
import CurrenciesList from "./components/CurrenciesList";

const routes = [
    { path: '/', component: CurrenciesList },
    { path: '/login', component: Login }
];

const router =  createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
