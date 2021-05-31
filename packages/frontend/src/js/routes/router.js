import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - Todo List` : 'Todo List';
  window.scrollTo(0, 0);
  next();
});

export default router;
