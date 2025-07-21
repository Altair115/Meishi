<script setup lang="ts">
import NavBarItem from "@/components/navigation/NavBarItem.vue";
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-logo" title="Home">
      <!-- Home SVG icon -->
      <svg class="icon" viewBox="0 0 24 24" width="24" height="24">
        <path
            d="M10 20v-6h4v6m5-16.41L12 3 3 11.59V19a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-4h2v4a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V11.59z"
            fill="none" stroke="currentColor" stroke-width="2"
        />
      </svg>
    </router-link>
    <ul class="navbar-links">
      <li>
        <NavBarItem to="/" label="Home" icon="🏠" />
      </li>
      <!--
      <li>
        <NavBarItem to="/about" label="About" icon="ℹ️" />
      </li>
      -->
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