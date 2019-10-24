<template>
  <div id="container">
    <nav>
      <ul>
        <li>
          <a id="logo" href="#">LOGO</a>
        </li>
        <li v-for="link in links" :key="link.path">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
        <a id="menu-icon" href="#"></a>
      </ul>
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
#container {
  width: 100%;
  display: flex;
}
nav {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  ul {
    text-align: center;
    list-style-type: none;
    margin: 0;
    padding: 15px;
    li {
      display: inline;
      font-family: "Fira Sans", sans-serif;
      font-size: 17px;
      a {
        color: #f2f2f2;
        text-decoration: none;
        padding: 14px;
        &:hover {
          background-color: #111;
        }
      }
    }
  }
}
</style>
