<template>
  <span class="gradient-text" :style="{ 'font-size': size, background: color }">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class GradientText extends Vue {
  @Prop() color!: string;
  @Prop() size!: string;
}
</script>
