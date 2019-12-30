<template>
  <div class="home">
    <st-section :background="'#fff'" :height="'80vh'">
      <st-logo />
      <st-gradient-text :color="'#fff'" size="5rem">Shuttle</st-gradient-text>
      <span id="brand-text">Shuttle</span>
      <st-card class="col-md-6" shadow header="some title" content="somecontent" footer="somefooter" />
    </st-section>
  </div>
</template>

<script lang="ts">
import StCard from '@/components/StCard.vue';
import StSection from '@/components/StSection.vue';
import StGradientText from '@/components/StGradientText.vue';
import { linearGradients } from '../util/consts';

export default {
  name: 'Home',
  components: {
    StCard,
    StSection,
    StGradientText
  },
  data() {
    return {
      pink: linearGradients.Pink
    };
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
