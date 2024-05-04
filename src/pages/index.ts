import { RouteRecordRaw } from 'vue-router';
import { RouterEnum } from 'shared/model/router';
import Routing from './index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouterEnum.Main,
    component: () => import('./main.vue'),
  },
  {
    path: '/contact-us',
    name: RouterEnum.ContactUs,
    component: () => import('./contact.us.vue'),
  },
  {
    path: '/catalog',
    name: RouterEnum.Catalog,
    component: () => import('./catalog.vue'),
  },
  {
    path: '/portfolio',
    name: RouterEnum.Portfolio,
    component: () => import('./portfolio.vue'),
  },
  {
    path: '/cart',
    name: RouterEnum.Cart,
    component: () => import('./cart.vue'),
  },
  {
    path: '/create-order',
    name: RouterEnum.CreateOrder,
    component: () => import('./create.order.vue'),
  },
  {
    path: '/product/:id',
    name: RouterEnum.Product,
    component: () => import('././product.vue'),
  },
];

export { Routing };
