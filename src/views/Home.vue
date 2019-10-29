<template>
  <div class="home">
    <img alt="Shuttle logo" src="../assets/logo.svg" width="80px" height="80px" />
    <h1>Shuttle -- Deliver your data, through the cloud, to the world, instantly</h1>
    <st-card :header="'some title'" :content="'somecontent'" :footer="'somefooter'" />
  </div>
</template>

<script lang="ts">
import StCard from '@/components/StCard.vue';

export default {
  name: 'Home',
  components: {
    StCard
  }
};
</script>

<style scoped lang="scss">
.home {
  @include conainer(2rem);

  h1 {
    @include mx(auto);
  }
}
</style>
