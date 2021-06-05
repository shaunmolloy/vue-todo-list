<template>
  <div class="action complete-task">
    <button class="btn btn--secondary" @click="completeTask">Complete</button>
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
    async completeTask() {
      const tasks = Object.filter(this.tasks, ([key, task]) => task.selected === true);
      for (const key of Object.keys(tasks)) {
        const task = tasks[key];
        await this.$store.dispatch('tasks/updateTask', {
          id: task.id,
          payload: {
            name: task.name,
            status: 'complete',
          },
        });
      }
    },
  },
}
</script>

<style lang="scss">
.action.complete-task {
  margin: 0 15px;
}
</style>
