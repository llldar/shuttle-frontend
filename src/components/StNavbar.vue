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
interface Link {
  name: string;
  path: string;
}

export default {
  name: "StNavbar",
  props: {
    links: {
      type: Array as () => Link[],
      required: true,
      default: [{ name: "Home", path: "/" }]
    }
  },
  data() {
    return {
      scrolled: false
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  }
};
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
  background-color: #0f0e17;
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
