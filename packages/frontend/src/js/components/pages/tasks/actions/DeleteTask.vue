<template>
  <div class="action delete-task">
    <button class="btn btn--red" @click="deleteTask">Delete</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import objectFilter from '@js/helpers/object-filter';

Object.filter = objectFilter;

export default {
  computed: {
    ...mapGetters({ tasks: 'tasks/tasks' }),
  },

  methods: {
    async deleteTask() {
      const tasks = Object.filter(this.tasks, ([key, task]) => task.selected === true);
      for (const key of Object.keys(tasks)) {
        const task = tasks[key];
        await this.$store.dispatch('tasks/deleteTask', task.id);
      }
    },
  },
}
</script>
