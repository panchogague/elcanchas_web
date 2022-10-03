import authRouter from 'src/modules/auth/router';
import { RouteRecordRaw } from 'vue-router';


const userRouter: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../layouts/MainLayout.vue'),
        redirect: '/home',
        children: [
            { name: 'search', path: '/search', component: () => import('../pages/SearchPage/SearchPage.vue') },
            { name: 'court', path: '/recinto/:id', props: true, component: () => import('../pages/BookingPage.vue') },
            { name: 'myprofile', path: '/miperfil', component: () => import('../pages/UserProfilePage.vue') },
            { name: 'favorite', path: '/favoritos', component: () => import('../pages/FavoriteCourtPage.vue') },
            { name: 'mybooking', path: '/misreservas', component: () => import('../pages/MyBookingPage.vue') },
            { path: '/home', name: 'home', component: () => import('../pages/HomePage.vue') },
            ...authRouter
        ],
    }];

export default userRouter;