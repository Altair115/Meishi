<script setup lang="ts">

</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-logo" title="Home">
      <!-- Home icon (SVG for simplicity) -->
      <svg class="icon" viewBox="0 0 24 24" width="24" height="24">
        <path
            d="M10 20v-6h4v6m5-16.41L12 3 3 11.59V19a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-4h2v4a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V11.59z"
            fill="none" stroke="currentColor" stroke-width="2"
        />
      </svg>
    </router-link>
    <ul class="navbar-links">
      <li>
        <router-link to="/" class="navbar-link">
          <!-- Example "home" icon -->
          <span class="icon">🏠</span>
          Home
        </router-link>
      </li>
      <!-- Add more nav items as needed -->
      <!--
      <li>
        <router-link to="/about" class="navbar-link">
          <span class="icon">ℹ️</span>
          About
        </router-link>
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
.navbar-logo .icon {
  color: #4fc08d;
}
.navbar-links {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.navbar-link {
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: color .2s;
}
.navbar-link:hover, .navbar-link.router-link-exact-active {
  color: #4fc08d;
}
.icon {
  margin-right: 0.5em;
  font-size: 1.1em;
  vertical-align: middle;
}

</style>