import { VueQueryPlugin } from '@tanstack/vue-query';
import { createApp } from 'vue';
import { extendYup } from 'shared/lib';
import App from './App.vue';
import { router } from './providers';

import './index.scss';

extendYup();
createApp(App).use(router).use(VueQueryPlugin).mount('#app');
