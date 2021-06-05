<template>
  <div class="tasks">
    <task-actions :selected-tasks="selectedTasks" />

    <div class="tasks__list">
      <task
        v-for="task in taskList"
        :key="`task-${task.id}`"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from '@pages/tasks/Task.vue';
import AddTask from '@pages/tasks/actions/AddTask.vue';
import CompleteTask from '@pages/tasks/actions/CompleteTask.vue';
import DeleteTask from '@pages/tasks/actions/DeleteTask.vue';
import TaskActions from '@pages/tasks/TaskActions.vue';

export default {
  components: {
    TaskActions,
    AddTask,
    CompleteTask,
    DeleteTask,
    Task,
  },

  data() {
    return {
      taskList: null,
    }
  },

  computed: {
    ...mapGetters({ tasks: 'tasks/tasks' }),

    selectedTasks() {
      let selected = 0;
      Object.keys(this.taskList).forEach((key) => {
        const task = this.taskList[key];
        if (task !== null && task.selected) {
          selected++;
        }
      });
      return selected;
    },
  },

  created() {
    this.taskList = this.tasks;
  },

  watch: {
    tasks: {
      handler(after) {
        this.taskList = after;
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss">
.tasks__list {
  background: #fff;
  padding: 0 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
}
</style>
