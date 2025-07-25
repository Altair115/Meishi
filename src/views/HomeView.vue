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
</template>

<style scoped>

</style>