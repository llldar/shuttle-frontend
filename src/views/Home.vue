<template>
  <div class="home">
    <st-section>
      <img alt="Shuttle logo" src="../assets/logo.svg" width="80px" height="80px" />
      <span id="brand-text">
        Shuttle -- Deliver your data, through the cloud, to the world, instantly
      </span>
    </st-section>
    <st-card class="col-md-6" shadow="true" header="some title" content="somecontent" footer="somefooter" />
  </div>
</template>

<script lang="ts">
import StCard from '@/components/StCard.vue';
import StSection from '@/components/StSection.vue';

export default {
  name: 'Home',
  components: {
    StCard,
    StSection
  }
};
</script>

<style scoped lang="scss">
.home {
  @extend .container-fluid;

  #brand-text {
    @include mx(auto);
    font-size: 5rem;
    padding: 1rem 1rem;
  }
}
</style>
