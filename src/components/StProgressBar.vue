<template>
  <div
    :class="containerClass"
    :style="{
      background: containerColor,
      zIndex: zIndex
    }"
  >
    <div
      :class="barClass"
      :style="{
        width: `${width}%`,
        height: height,
        background: backgroundColor
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class StProgressBar extends Vue {
  width = 0;
  height: string = '.3rem';
  zIndex: string = '50';
  backgroundColor: string = 'linear-gradient(to right, #38C172, #51D88A)';
  containerColor: string = 'transparent';
  barClass = {};
  containerClass: string = 'progress-bar-container--container';

  handleScroll() {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.width = (window.scrollY / height) * 100;
    const eventWidth = Math.ceil(this.width);
    if (eventWidth === 0) {
      this.$emit('begin');
    }
    if (eventWidth === 100) {
      this.$emit('complete');
    }
  }
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.dispatchEvent(new Event('scroll'));
  }
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  @Watch('$route')
  onRouteChanged() {
    this.width = 0;
  }
}
</script>

<style scoped>
.progress-bar-container--container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
