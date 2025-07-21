<script setup lang="ts">
import NavBarItem from "@/components/navigation/NavBarItem.vue";
import Logo from "@/components/common/logo.vue";
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-logo" title="Home">
      <Logo />
    </router-link>
    <ul class="navbar-links">
      <li>
        <NavBarItem to="/about" label="About" icon="info" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100vw; /* Full viewport width */
  position: fixed; /* Sticks to top */
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  background: #222;
  padding: 0 2rem;
  height: 56px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
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