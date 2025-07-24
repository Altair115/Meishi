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
  <nav :class="['nier-navbar', { 'navbar-sticky': props.sticky }]">
    <a href="/home" class="nier-navbar-logo" title="Home" @click="handleLogoClick">
      <Logo />
    </a>
    <ul class="nier-navbar-links">
      <li>
        <NavBarItem to="#about" label="About" icon="info" />
      </li>
      <li>
        <NavBarItem to="#projects" label="Projects" icon="code" />
      </li>
      <li>
        <NavBarItem to="#contact" label="Contact" icon="mail" />
      </li>
      <li>
        <NavBarItem to="/blog" label="Blog" icon="rss_feed" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar-sticky {
  position: fixed;
  top: 0;
  background: var(--nier-panel-dark) !important;
  box-shadow: 0 2px 12px rgba(16, 16, 16, 0.13);
  border-bottom: 1.5px solid var(--nier-border-gray);
}
</style>