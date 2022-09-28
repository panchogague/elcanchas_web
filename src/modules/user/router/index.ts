import { RouteRecordRaw } from 'vue-router';

const userRouter: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('../pages/HomePage.vue') },
        { name: 'search', path: '/search', component: () => import('../pages/SearchPage.vue') }],
    }];

export default userRouter;