<template>
  <div id="app">
    <st-navbar :links="links"></st-navbar>
    <st-progress-bar></st-progress-bar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import StNavbar from "@/components/StNavbar.vue";
import StProgressBar from "@/components/StProgressBar.vue";

export default {
  name: "App",
  components: {
    StNavbar,
    StProgressBar
  },
  data() {
    return {
      links: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "About",
          path: "/About"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

main {
  flex: 1 0 auto;
  padding: var(--space) var(--space) 0;
  width: 100%;
}
main::after {
  content: "\00a0"; /* &nbsp; */
  display: block;
  margin-top: var(--space);
  height: 0px;
  visibility: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
