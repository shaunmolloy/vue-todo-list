<template>
  <div id="app">
    <v-header />

    <router-view
      :key="$route.path"
      class="content"
    />

    <v-footer />
  </div>
</template>

<script>
import VHeader from '@layouts/VHeader.vue';
import VFooter from '@layouts/VFooter.vue';

export default {
  components: {
    VHeader,
    VFooter,
  }
};
</script>

<style lang="scss">
.content {
  min-height: calc(100vh - 239px)
}
</style>
