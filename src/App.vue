<template>
  <div id="app" :class="scrollable">
    <div :class="IEBlock">
      <div class="info-card">
        <h1>Warning</h1>
        <h4>This website does not support Internet Explorer</h4>
        <h4>Please use Firefox/Chrome/Safari/Edge for best experience</h4>
      </div>
    </div>
    <st-progress-bar />
    <header>
      <st-navbar />
    </header>
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

const detectIE = (): boolean => {
  const ua = window.navigator.userAgent;
  return ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1;
};

export default {
  name: 'App',
  components: {
    StNavbar,
    StProgressBar,
    StFootbar
  },
  data: function() {
    return {
      IEBlock: detectIE() ? 'IEBlock' : 'hidden',
      scrollable: detectIE() ? 'no-scroll' : ''
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: $font-family-sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
  & .no-scroll {
    position: fixed;
    overflow: hidden;
  }
}

main {
  flex: 1 0 auto;
  padding: var(--space) var(--space) 0;
  width: 100%;
}

main::after {
  content: '\00a0';
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

header {
  height: $navbar-height;
}

.hidden {
  display: none;
}

.IEBlock {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  flex-wrap: wrap;
  .info-card {
    margin-left: auto;
    margin-right: auto;
    margin-top: 15rem;
    h1,
    h4 {
      color: white;
    }
  }
}
</style>
