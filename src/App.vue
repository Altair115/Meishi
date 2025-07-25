<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import NavBar from "@/components/navigation/NavBar.vue";
import Banner from "@/components/common/Banner.vue";

const isSticky = ref(false);
const bannerHeight = ref(600);
const navbarHeight = ref(95); // If needed for offset

function updateBannerHeight(height) {
  bannerHeight.value = height;
}

function updateNavBarHeight(height) {
  navbarHeight.value = height;
}

function handleScroll() {
  // Trigger sticky when scrolled past the banner
  isSticky.value = window.scrollY > bannerHeight.value;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <Banner @height="updateBannerHeight">
    <h1>K.E. Celinski</h1>
    <p>Software engineer, Programmer, Game designer</p>
  </Banner>
  <NavBar :sticky="isSticky" @height="updateNavBarHeight" />

  <!-- Spacer for sticky navbar -->
  <div v-if="isSticky" :style="{ height: navbarHeight + 'px' }"></div>

  <main class="main-content">
    <router-view />
  </main>
</template>

<style scoped>

</style>
