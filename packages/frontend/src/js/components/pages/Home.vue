<template>
  <div class="home page">
    <div class="container">
      <tasks />
    </div>
  </div>
</template>

<script>
import Tasks from '@pages/tasks/Tasks.vue';

export default {
  components: {
    Tasks,
  },
}
</script>
