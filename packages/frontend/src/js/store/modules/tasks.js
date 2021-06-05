import { taskClient } from '@js/services';

const SET_TASKS = 'SET_TASKS';
const ADD_TASK = 'ADD_TASK';
const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';
const UPDATE_TASK_SELECTED = 'UPDATE_TASK_SELECTED';
const DELETE_TASK = 'DELETE_TASK';
const CLEAR = 'CLEAR';

const defaultState = () => ({
  tasks: [],
});

const storeGetters = {
  tasks: (state) => state.tasks,
};

const storeMutations = {
  [SET_TASKS](state, tasks) {
    Object.keys(tasks).forEach((key) => {
      state.tasks[key] = { selected: false, ...tasks[key] };
    });
  },

  [ADD_TASK](state, task) {
    state.tasks.push({ selected: false, ...task });
  },

  [UPDATE_TASK_STATUS](state, { id, status }) {
    const [ taskId ] = Object.keys(state.tasks).filter(key => state.tasks[key].id === id);
    state.tasks[taskId].status = status;
    state.tasks[taskId].selected = false;
  },

  [UPDATE_TASK_SELECTED](state, { id, selected }) {
    const [ taskId ] = Object.keys(state.tasks).filter(key => state.tasks[key].id === id);
    state.tasks[taskId].selected = selected;
  },

  [DELETE_TASK](state, id) {
    const [ taskId ] = Object.keys(state.tasks).filter(key => state.tasks[key].id === id);
    delete state.tasks[taskId];
    state.tasks = state.tasks.filter((task) => task !== null);
  },

  [CLEAR](state) {
    Object.assign(state, defaultState());
  },
};

const storeActions = {
  async getTasks({ commit }) {
    return taskClient.getTasks()
      .then((response) => commit(SET_TASKS, response.data));
  },

  async addTask({ commit }, payload) {
    return taskClient.addTask(payload)
      .then((response) => commit(ADD_TASK, response.data));
  },

  async updateTask({ commit }, { id, payload }) {
    return taskClient.updateTask(id, payload)
      .then(() => commit(UPDATE_TASK_STATUS, { id, status: 'complete' }));
  },

  async deleteTask({ commit }, id) {
    return taskClient.deleteTask(id)
      .finally(() => commit(DELETE_TASK, id));
  },

  updateTaskSelected({ commit }, { id, selected }) {
    commit(UPDATE_TASK_SELECTED, { id, selected });
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
