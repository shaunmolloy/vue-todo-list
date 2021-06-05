import Vue from 'vue';
import router from '@js/routes/router';
import App from '@components/App.vue';
import store from '@js/store';
import '@styles/main.scss';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
  components: { App },
  router,
  store,
});
