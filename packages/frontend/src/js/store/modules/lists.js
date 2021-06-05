import { listClient } from '@js/services';

const SET_LISTS = 'SET_LISTS';
const ADD_LIST = 'ADD_LIST';
const DELETE_LIST = 'DELETE_LIST';
const CLEAR = 'CLEAR';

const defaultState = () => ({
  lists: [],
});

const storeGetters = {
  lists: (state) => state.lists,
};

const storeMutations = {
  [SET_LISTS](state, lists) {
    state.lists = lists;
  },

  [ADD_LIST](state, list) {
    state.lists.push(list);
  },

  [DELETE_LIST](state, id) {
    const [ listId ] = Object.keys(state.lists).filter(key => state.lists[key].id === id);
    delete state.lists[listId];
    state.lists = state.lists.filter((list) => list !== null);
  },

  [CLEAR](state) {
    Object.assign(state, defaultState());
  },
};

const storeActions = {
  async getLists({ commit }) {
    return listClient.getLists()
      .then((response) => commit(SET_LISTS, response.data));
  },

  async addList({ commit }, payload) {
    return listClient.addList(payload)
      .then((response) => commit(ADD_LIST, response.data));
  },

  async deleteList({ commit }, id) {
    return listClient.deleteList(id)
      .finally(() => commit(DELETE_LIST, id));
  },

  clear({ commit }) {
    commit(CLEAR);
  },
};

export default {
  namespaced: true,
  state: defaultState(),
  getters: storeGetters,
  mutations: storeMutations,
  actions: storeActions,
  modules: {},
};
