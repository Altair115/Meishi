<script setup lang="ts">
import { defineProps, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import NavBarItem from "@/components/navigation/NavBarItem.vue";
import Logo from "@/components/common/logo.vue";

const props = defineProps({ sticky: Boolean });
const router = useRouter();
const route = useRoute();

function scrollToSection(id: string) {
  // Helper to actually perform the scroll when element is available
  function doScroll() {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  if (route.path !== "/") {
    // Go to homepage first, then scroll (after DOM updates)
    router.push("/").then(() => {
      // Wait a tick to ensure the content is rendered
      nextTick(() => {
        doScroll();
      });
    });
  } else {
    doScroll();
  }
}

function handleLogoClick(event: MouseEvent) {
  event.preventDefault();
  if (route.path === "/") {
    // If already on the home page, scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Navigate to home page
    router.push("/");
  }
}
</script>

<template>
  <nav :class="['navbar', { 'navbar-sticky': props.sticky }]">
    <a href="/home" class="navbar-logo" title="Home" @click="handleLogoClick">
      <Logo />
    </a>
    <ul class="navbar-links">
      <li>
        <a href="#about" @click.prevent="scrollToSection('about')">About</a>
      </li>
      <li>
        <a href="#projects" @click.prevent="scrollToSection('projects')">Projects</a>
      </li>
      <li>
        <a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a>
      </li>
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