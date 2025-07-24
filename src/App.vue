<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import NavBar from "@/components/navigation/NavBar.vue";
import Banner from "@/components/common/Banner.vue";
import HomeView from "@/views/HomeView.vue";

const isSticky = ref(false);
const bannerHeight = ref(0);

function updateBannerHeight(height) {
  bannerHeight.value = height;
}

function handleScroll() {
  isSticky.value = window.scrollY > (bannerHeight.value || 0) - 56; // 56 = navbar height
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <NavBar :sticky="isSticky"/>
  <Banner @height="updateBannerHeight">
    <h1>K.E. Celinski</h1>
    <p>Software engineer, Programmer, Game designer</p>
  </Banner>
  <div class="main-content">
    <section id="home"><HomeView /></section>
  </div>
</template>

<style scoped>

</style>
