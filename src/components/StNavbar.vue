<template>
  <div id="navbar">
    <nav :class="navClass">
      <div class="nav-brand">
        <img id="nav_logo" src="@/assets/logo.svg" />
        <span>Shuttle</span>
      </div>
      <div class="nav-links">
        <div v-for="link in links" :key="link.path" class="nav-item">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </div>
      </div>
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
  z-index: 10;
}

nav {
  $color-dark: #0f0e17;
  $side-width: 2rem;
  position: fixed;
  top: 0;
  left: 0;

  background-color: $color-dark;
  display: flex;

  &.hidden {
    opacity: 0;
    transform: translate(0, -3rem);
    transition: transform 0.3s, background 0.3s, color 0.3s, opacity 0 0.3s;
  }

  &.visible {
    opacity: 1;
    transform: translate(0, 0);
    transition: transform 0.3s, background 0.3s, color 0.3s;
  }

  width: 100%;
  height: 3rem;

  @mixin mx($width) {
    margin-left: $width;
    margin-right: $width;
  }

  @mixin my($height) {
    margin-top: $height;
    margin-bottom: $height;
  }

  .nav-brand {
    display: flex;
    margin-left: $side-width;
    @include my(0.75rem);

    #nav_logo {
      @include mx(1rem);
      height: 100%;
    }

    span {
      margin-right: 1rem;
      @include my(auto);
      color: white;
    }
  }

  .nav-links {
    display: flex;
    margin-left: auto;
    margin-right: $side-width;
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
