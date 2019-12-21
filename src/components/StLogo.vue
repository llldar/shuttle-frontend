<template>
  <img alt="Shuttle logo" src="../assets/logo.svg" :width="width" :height="height" />
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StCard extends Vue {
  @Prop() width: string = '80px';
  @Prop() height: string = '80px';
}
</script>
