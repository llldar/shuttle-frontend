<template>
  <div class="home">
    <st-section :background="'#fff'" :height="'80vh'">
      <div class="left">
        <st-logo />
        <div class="track">
          <div class="tile"></div>
          <div class="tile"></div>
          <div class="tile"></div>
          <div class="tile"></div>
          <div class="tile"></div>
        </div>
      </div>
      <st-gradient-text :color-a="colors.demonicPurple" :color-b="colors.sensualFumes" :size="'5rem'" :weight="600"
        >Shuttle</st-gradient-text
      >
      <span id="brand-text">Shuttle</span>
      <st-card class="col-md-6" shadow header="some title" content="somecontent" footer="somefooter" />
    </st-section>
  </div>
</template>

<script lang="ts">
import StCard from '@/components/StCard.vue';
import StGradientText from '@/components/StGradientText.vue';
import { colors } from '../util/consts';

export default {
  name: 'Home',
  components: {
    StCard,
    StGradientText
  },
  data() {
    return {
      colors
    };
  }
};
</script>

<style scoped lang="scss">
.home {
  @extend .container-fluid-full;
  max-width: 100%;
  padding-top: $navbar-height;

  #brand-text {
    @include mx(auto);
    font-size: 5rem;
    padding: 1rem 1rem;
  }
}

.track {
  display: flex;
  @include mx(auto);

  .tile {
    height: 0.3rem;
    width: 3rem;
    @include mx(1rem);
    background-image: linear-gradient(45deg, #de4daa 0%, #f6d327 90%);
  }
}
</style>
