<template>
  <div class="task" :class="{ 'task--complete': task.status === 'complete' }" @click="select">
    <input class="task__select" type="checkbox" :checked="task.selected || false">
    <p class="task__name">{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async select() {
      this.task.selected = !this.task.selected;
      await this.$store.dispatch('tasks/updateTaskSelected', {
        id: this.task.id,
        selected: this.task.selected,
      });
    },
  },
}
</script>

<style lang="scss">
.task {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  &__select {
    margin-right: 20px;
  }

  &--complete {
    text-decoration: line-through;
    color: #888;
  }
}
</style>
