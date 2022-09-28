import { RouteRecordRaw } from 'vue-router';
import userRoutes from '../modules/user/router';

const routes: RouteRecordRaw[] = [

  ...userRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
