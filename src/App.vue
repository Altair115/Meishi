<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import NavBar from "@/components/navigation/NavBar.vue";
import Banner from "@/components/common/Banner.vue";
import HomeView from "@/views/HomeView.vue";

const isSticky = ref(false);
const bannerHeight = ref(600);
const navbarHeight = ref(56); // If needed for offset

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
  <NavBar :sticky="isSticky" @height="updateNavBarHeight"/>
  <div v-if="isSticky" :style="{height: navbarHeight + 'px'}"></div>
  <div class="main-content">
    <section id="home"><HomeView /></section>

    <!-- This dummy block makes page long for scrolling! -->
    <div style="height: 2000px; background: repeating-linear-gradient(#eee, #ddd 100px);">
    </div>
  </div>
</template>

<style scoped>

</style>
