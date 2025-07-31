<script setup lang="ts">
import {useActiveSection} from "@/composables/useActiveSection";
import { watch } from "vue";

import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";

const props = defineProps<{
  activeSection: string | null
}>();

const emit = defineEmits<{
  (e: 'update:activeSection', value: string | null): void;
}>();

const { activeSection: observedSection } = useActiveSection(['home', 'about', 'projects', 'contact']);

watch(observedSection, (newSection) => {
  emit('update:activeSection', newSection);
});
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