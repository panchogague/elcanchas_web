import { RouteRecordRaw } from 'vue-router';

const adminRouter: RouteRecordRaw[] = [
    {
        path: '/dashboard',
        component: () => import('../layouts/AdminLayout.vue'),
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('../pages/DashboardPage.vue'),
            },
            {
                path: '/historial',
                name: 'booking_history',
                component: () => import('../pages/BookingHistoryPage.vue'),
            },
            {
                path: '/admin',
                name: 'admin_court',
                component: () => import('../pages/CourtProfilePage.vue'),
            },
            {
                path: '/canchas',
                name: 'pitches',
                component: () => import('../pages/PitchesPage.vue'),
            }]
    }];

export default adminRouter;