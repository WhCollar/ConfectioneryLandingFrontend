import { RouteRecordRaw } from 'vue-router';
import { RouterEnum } from 'shared/model/router';
import Routing from './index.vue';
import Main from './main.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouterEnum.Main,
    component: Main,
  },
];

export { Routing };
