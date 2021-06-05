<template>
  <div class="action add-task">
    <button class="btn btn--primary" @click="showAddTask">Add Task</button>

    <div v-if="show" class="action__inner">
      <input v-model="task.name" class="input-text" type="text" @keyup.enter="addTask">
      <button class="btn btn--primary" @click="addTask">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      task: { name: null },
    };
  },

  methods: {
    showAddTask() {
      this.show = !this.show;
      this.$emit('show', this.show);
      this.$nextTick(() => {
        document.querySelector('.input-text').focus();
      });
    },

    async addTask() {
      await this.$store.dispatch('tasks/addTask', {
        name: this.task.name,
        list_id: 1,
      });
      this.task.name = null;
      this.show = !this.show;
    },
  },
}
</script>

<style lang="scss">
.action.add-task {
  width: 100%;
}

.action__inner {
  margin-top: 15px;
  padding: 15px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  display: flex;
  flex-direction: row;

  .input-text {
    margin-right: 10px;
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
  }
}
</style>
