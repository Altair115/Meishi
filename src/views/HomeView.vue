<script setup lang="ts">
import Banner from "@/components/common/Banner.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";
</script>

<template>
  <section id="home">
    <h1>Welcome to Meishi!</h1>
    <p>This is your homepage. Edit it as you like!</p>
  </section>
  <section id="about">
    <AboutView />
  </section>
  <section id="projects">
    <ProjectsView/>
  </section>
  <section id="contact">
    <ContactView/>
  </section>
  <!-- Demo block for scroll testing, remove in production -->
  <div style="height: 2000px; background: repeating-linear-gradient(#23221f 0 20px, #2f2d2a 21px 120px);"></div>
</template>

<style scoped>

</style>