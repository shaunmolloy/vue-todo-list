import Home from '@components/pages/Home.vue';
import NotFound from '@components/pages/NotFound.vue';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
    meta: { title: 'Page Not Found' },
  },
];
