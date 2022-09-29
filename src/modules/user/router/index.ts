import authRouter from 'src/modules/auth/router';
import { RouteRecordRaw } from 'vue-router';


const userRouter: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../layouts/MainLayout.vue'),
        children: [
            { path: '/', name: 'home', component: () => import('../pages/HomePage.vue') },
            { name: 'search', path: '/search', component: () => import('../pages/SearchPage.vue') },
            { name: 'court', path: '/court', component: () => import('../pages/CourtPage.vue') },
            ...authRouter

        ],
    }];

export default userRouter;