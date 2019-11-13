<template>
  <section class="section col-12" :style="{ height, background }">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StSection extends Vue {
  @Prop() height!: string;
  @Prop() background!: string;
}
</script>

<style scoped lang="scss">
.section {
  display: flex;
  width: 100%;
}
</style>
