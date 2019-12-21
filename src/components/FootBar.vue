<template>
  <div id="footbar">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footbar extends Vue {}
</script>

<style scoped lang="scss">
#footbar {
  @extend %st-dark-background;

  display: flex;
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 10rem;
}
span {
  color: white;
  text-align: center;
  margin: auto auto;
}
</style>
