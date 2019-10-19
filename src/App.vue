<template>
  <div id="app">
    <st-navbar :links="links"></st-navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import StNavbar from "@/components/StNavbar.vue";

export default {
  name: "App",
  components: {
    StNavbar
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
