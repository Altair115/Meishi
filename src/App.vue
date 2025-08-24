<script setup>
import {ref, onMounted, onBeforeUnmount, watch} from 'vue';
import NavBar from "@/components/navigation/NavBar.vue";
import Banner from "@/components/common/Banner.vue";
import Footer from "@/components/common/Footer.vue";
import image from '@/assets/MythirialWallpaper.jpg'
import {useRoute} from "vue-router";

const route = useRoute();
const isHome = route.path === '/'; // or use a more robust check if needed

const isSticky = ref(false);
const bannerHeight = ref(540);
const navbarHeight = ref(95); // If needed for offset
const activeSection = ref(null);

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

watch(activeSection, (val) => {
  console.log('👀 activeSection changed:', val);
});
</script>

<template>
  <Banner @height="updateBannerHeight" :image-url="image">
    <h1>K.E. Celinski</h1>
    <p>Software engineer, Programmer, Game designer</p>
  </Banner>
  <NavBar :sticky="isSticky" :active-section="route.path === '/' ? activeSection : null" @height="updateNavBarHeight" />

  <!-- Spacer for sticky navbar -->
  <div v-if="isSticky" :style="{ height: navbarHeight + 'px' }"></div>

  <main class="main-content">
    <router-view v-if="isHome" v-model:activeSection="activeSection" />
    <Footer />
  </main>
</template>

<style scoped>

</style>
