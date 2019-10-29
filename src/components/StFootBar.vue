<template>
  <div id="footbar">
    <span>sticky footer</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class StFootbar extends Vue {}
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
