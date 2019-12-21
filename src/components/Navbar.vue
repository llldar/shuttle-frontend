<template>
  <div id="navbar">
    <nav :class="navClass">
      <a class="nav-brand" href="/">
        <img id="nav-logo" src="@/assets/logo-white.svg" />
        <h3 id="nav-text">Shuttle</h3>
      </a>
      <div class="nav-links">
        <div v-for="link in links" :key="link.path" class="nav-item">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component, Prop } from 'vue-property-decorator';

interface Link {
  name: string;
  path: string;
}

@Component
export default class Navbar extends Vue {
  @Prop() links!: Link[];
  currentScroll: number = 0;
  previousScroll: number = 0;
  navClass: string = 'visible';
  handleScroll() {
    this.currentScroll = window.scrollY;
    if (this.currentScroll > 0) {
      if (this.currentScroll > this.previousScroll) {
        setTimeout(() => {
          this.navClass = 'hidden';
        }, 100);
      } else {
        setTimeout(() => {
          this.navClass = 'visible';
        }, 100);
      }
      this.previousScroll = this.currentScroll;
    }
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
  z-index: z(navbar);
}

nav {
  $side-width: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: z(navbar);

  @extend %st-light-background;
  display: flex;

  &.hidden {
    opacity: 0;
    transform: translate(0, -3rem);
    transition: transform 0.3s, background 0.3s, color 0.3s, opacity 0.2s;
  }

  &.visible {
    opacity: 1;
    transform: translate(0, 0);
    transition: transform 0.3s, background 0.3s, color 0.3s, opacity 0.2s;
  }

  width: 100%;
  height: $navbar-height;

  .nav-brand {
    display: flex;
    margin-left: $side-width;
    @include my($nav-item-padding);
    text-decoration: none;

    #nav-logo {
      @include mx(1rem);
      height: 100%;
    }

    #nav-text {
      margin-right: 1rem;
      @include my(auto);
      color: white;
    }
  }

  .nav-links {
    display: flex;
    margin-left: 0;
    margin-right: auto;
  }

  .nav-item {
    display: flex;
    text-decoration: none;
    color: white;
    padding-left: $nav-item-padding;
    padding-right: $nav-item-padding;
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
