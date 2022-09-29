import { RouteRecordRaw } from 'vue-router';

const authRouter: RouteRecordRaw[] = [
    { path: '/login', name: 'login', component: () => import('../pages/LoginPage.vue') },
    { path: '/registro', name: 'register', component: () => import('../pages/RegisterPage.vue') },
];

export default authRouter;