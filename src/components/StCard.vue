<template>
  <div :class="['card', shadow ? 'shadow' : '']">
    <div v-if="header" class="card-header"><slot name="st-card-header"></slot></div>
    <div class="card-body"><slot></slot></div>
    <div v-if="footer" class="card-footer"><slot name="st-card-footer"></slot></div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StCard extends Vue {
  @Prop() header!: string;
  @Prop() footer!: string;
  @Prop() shadow!: boolean;
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: $card-bg;
  background-clip: border-box;
  border: $card-border-width solid $card-border-color;

  > hr {
    margin-right: 0;
    margin-left: 0;
  }

  &.shadow {
    box-shadow: $box-shadow;
    border: none;
  }

  .card-header {
    @include mx(auto);
    font-size: $h4-font-size;
    padding: $card-spacer-y $card-spacer-x;
  }

  .card-body {
    flex: 1 1 auto;
    padding: $card-spacer-x;
    color: $card-color;
  }

  .card-text:last-child {
    margin-bottom: 0;
  }

  .card-link {
    + .card-link {
      margin-left: $card-spacer-x;
    }
  }

  .card-footer {
    padding: $card-spacer-y $card-spacer-x;
  }
}
</style>
