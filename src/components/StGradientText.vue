<template>
  <span
    class="gradient-text"
    :style="{
      'font-size': size,
      'font-weight': weight,
      background: `linear-gradient(45deg, ${colorA} 0%, ${colorB} 90%)`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    }"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StGradientText extends Vue {
  @Prop() colorA!: string;
  @Prop() colorB!: string;
  @Prop() size!: string;
  @Prop() weight!: number;
}
</script>
