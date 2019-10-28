<template>
  <div id="app">
    <header>
      <st-navbar />
    </header>
    <st-progress-bar />
    <main>
      <router-view />
    </main>
    <footer>
      <st-footbar />
    </footer>
  </div>
</template>

<script lang="ts">
import StNavbar from '@/components/StNavbar.vue';
import StProgressBar from '@/components/StProgressBar.vue';
import StFootbar from '@/components/StFootBar.vue';

export default {
  name: 'App',
  components: {
    StNavbar,
    StProgressBar,
    StFootbar
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex: 1 0 auto;
  padding: var(--space) var(--space) 0;
  width: 100%;
}

main::after {
  content: '\00a0'; /* &nbsp; */
  display: block;
  margin-top: var(--space);
  height: 0px;
  visibility: hidden;
}

@media (--break-lg) {
  .main {
    padding-top: var(--space-lg);
  }
  .main::after {
    margin-top: var(--space-lg);
  }
}

header footer {
  flex: none;
}
</style>
