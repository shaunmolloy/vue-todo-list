import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {
  lists,
  tasks,
} from './modules';

Vue.use(Vuex);

const SET_LOADED = 'SET_LOADED';

export default new Vuex.Store({
  state: {
    loaded: false,
  },
  getters: {
    loaded: (state) => state.loaded,
  },
  mutations: {
    [SET_LOADED](state, loaded) {
      state.loaded = loaded;
    },
  },
  actions: {
    async init({ getters, commit, dispatch }) {
      if (getters['loaded']) {
        return;
      }
      await dispatch('lists/getLists');
      await dispatch('tasks/getTasks');
      commit(SET_LOADED, true);
    },
  },
  modules: {
    lists,
    tasks,
  },
  plugins: [
    createPersistedState({ storage: window.localStorage }),
  ],
});
