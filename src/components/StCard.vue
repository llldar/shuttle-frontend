<template>
  <div class="card">
    <div class="card-header">{{ header }}</div>
    <div class="card-body">{{ body }}</div>
    <div class="card-footer">{{ footer }}</div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StCard extends Vue {
  @Prop() header: string = '';
  @Prop() body: string = '';
  @Prop() footer: string = '';
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
}

.card-body {
  // Enable `flex-grow: 1` for decks and groups so that card blocks take up
  // as much space as possible, ensuring footers are aligned to the bottom.
  flex: 1 1 auto;
  padding: $card-spacer-x;
  color: $card-color;
}

.card-title {
  margin-bottom: $card-spacer-y;
}

.card-subtitle {
  margin-top: -$card-spacer-y / 2;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link {
  + .card-link {
    margin-left: $card-spacer-x;
  }
}

.card-header {
  padding: $card-spacer-y $card-spacer-x;
  margin-bottom: 0; // Removes the default margin-bottom of <hN>
  color: $card-cap-color;
  background-color: $card-cap-bg;
  border-bottom: $card-border-width solid $card-border-color;
}

.card-footer {
  padding: $card-spacer-y $card-spacer-x;
  background-color: $card-cap-bg;
  border-top: $card-border-width solid $card-border-color;
}
</style>
