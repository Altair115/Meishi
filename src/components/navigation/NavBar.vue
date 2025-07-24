<script setup lang="ts">
import { defineProps } from "vue";
import NavBarItem from "@/components/navigation/NavBarItem.vue";
import Logo from "@/components/common/logo.vue";

const props = defineProps({ sticky: Boolean });
</script>

<template>
  <nav :class="['navbar', { 'navbar-sticky': props.sticky }]">
    <router-link to="/" class="navbar-logo" title="Home">
      <Logo />
    </router-link>
    <ul class="navbar-links">
      <li>
        <NavBarItem to="/blog" label="Blog" icon="rss_feed" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100vw;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  background: transparent;
  padding: 0 2rem;
  height: 56px;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: none;
  /* Only sticky will be fixed! */
  position: static;
  top: auto;
}
.navbar-sticky {
  position: fixed;
  top: 0;
  background: #222 !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.09);
}
.navbar-logo {
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 2rem;
  transition: opacity .2s;
  text-decoration: none;
}
.navbar-links {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>