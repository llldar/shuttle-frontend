<template>
  <div class="home">
    <st-section :background="'#fff'" :height="'80vh'">
      <img alt="Shuttle logo" src="../assets/logo.svg" width="80px" height="80px" />
      <span id="brand-text">Shuttle</span>
      <st-card class="col-md-6" shadow header="some title" content="somecontent" footer="somefooter" />
    </st-section>
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
  @extend .container-fluid-full;

  padding-top: $navbar-height;

  #brand-text {
    @include mx(auto);
    font-size: 5rem;
    padding: 1rem 1rem;
  }
}
</style>
