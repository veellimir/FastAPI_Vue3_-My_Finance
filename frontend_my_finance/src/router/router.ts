import { createRouter, createWebHistory }  from 'vue-router';

import { getAuthToken } from '../store/cookie.ts';

import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'


const routes = [
    {path: '/', name: 'Home', component: HomePage, meta: { requiresAuth: true }},
    {path: '/login', name: 'Login', component: LoginPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!getAuthToken();

    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: 'Login' });

    } else if (to.path === '/login' && isAuthenticated) {
        next({ name: 'Home' });

    } else {
        next();
    }
});


export default router;