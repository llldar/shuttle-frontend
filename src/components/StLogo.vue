<template>
  <img alt="Shuttle logo" src="../assets/logo.svg" :width="width" :height="height" />
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StCard extends Vue {
  @Prop() width!: string;
  @Prop() height!: string;
}
</script>
