<template>
  <div id="navbar">
    <nav>
      <div class="nav-item">
        <img id="nav_logo" src="@/assets/logo.svg" />
      </div>
      <div v-for="link in links" :key="link.path" class="nav-item">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </div>
      <a id="menu-icon" class="nav-item" href="#"></a>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

interface Link {
  name: string;
  path: string;
}

@Component
export default class StNavbar extends Vue {
  links: Link[] = [];
  scrolled: boolean = false;
  handleScroll() {
    this.scrolled = window.scrollY > 0;
  }
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>

<style scoped lang="scss">
#navbar {
  width: 100%;
  order: -1;
}

#nav_logo {
  max-height: 2rem;
  min-height: 1rem;
}

nav {
  $color-dark: #0f0e17;
  background-color: $color-dark;
  display: flex;

  width: 100%;
  min-height: 2rem;
  .nav-item {
    text-decoration: none;
    color: white;
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
</style>
