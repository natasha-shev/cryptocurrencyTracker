import {createRouter, createWebHistory} from 'vue-router'
import App from '@/App'

const routes = [
    { path: '/', component: App },
    //{ path: '/about', component: About }
];

const router =  createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
