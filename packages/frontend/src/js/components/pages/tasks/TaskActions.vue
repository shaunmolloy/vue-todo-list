<template>
  <div class="task-actions">
    <div class="actions-left" :class="{ 'full-width': (showAddTask || selectedTasks === 0) }">
      <add-task @show="showAddTask = !showAddTask" />
    </div>

    <div v-if="!showAddTask && selectedTasks > 0" class="actions-right">
      With selected:
      <complete-task />
      <delete-task />
    </div>
  </div>
</template>

<script>
import AddTask from '@pages/tasks/actions/AddTask.vue';
import CompleteTask from '@pages/tasks/actions/CompleteTask.vue';
import DeleteTask from '@pages/tasks/actions/DeleteTask.vue';

export default {
  components: {
    AddTask,
    CompleteTask,
    DeleteTask,
  },

  props: {
    selectedTasks: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      showAddTask: false,
    };
  },
}
</script>

<style lang="scss">
.task-actions {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: baseline;

  .actions {
    &-left,
    &-right {
      width: 50%;
      display: flex;
      flex-direction: row;
    }

    &-right {
      justify-content: flex-end;
      align-items: center;
    }
  }

  .full-width {
    width: 100%;
  }
}
</style>
