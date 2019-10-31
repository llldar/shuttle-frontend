<template>
  <div class="section col-12" :style="{ height: height }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StSection extends Vue {
  @Prop() height!: number;
}
</script>
