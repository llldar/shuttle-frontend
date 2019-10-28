<template>
  <div class="home">
    <img alt="Shuttle logo" src="../assets/logo.svg" width="80px" height="80px" />
    <HelloWorld msg="Shuttle -- Deliver your data, through the cloud, to the world, instantly" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
#Home {
  display: flex;
}
</style>
