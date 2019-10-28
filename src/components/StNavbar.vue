<template>
  <div id="navbar">
    <nav>
      <div class="nav-brand">
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
import { Vue, Component } from 'vue-property-decorator';

interface Link {
  name: string;
  path: string;
}

@Component
export default class StNavbar extends Vue {
  links: Link[] = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/About'
    }
  ];
  scrolled: boolean = false;
  handleScroll() {
    this.scrolled = window.scrollY > 0;
  }
  created() {
    window.addEventListener('scroll', this.handleScroll);
  }
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped lang="scss">
#navbar {
  width: 100%;
  order: -1;
}

nav {
  $color-dark: #0f0e17;
  background-color: $color-dark;
  display: flex;

  width: 100%;
  min-height: 2rem;
  .nav-brand {
    display: flex;
    margin: 1rem 2rem;
    #nav_logo {
      max-height: 2rem;
      min-height: 1rem;
    }
  }
  .nav-item {
    display: flex;
    text-decoration: none;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    a {
      text-decoration: none;
      color: white;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
}
</style>
