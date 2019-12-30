<template>
  <span class="gradient-text" :style="{ 'font-size': size, 'background-image': color }">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StGradientText extends Vue {
  @Prop() color!: string;
  @Prop() size!: string;
}
</script>
