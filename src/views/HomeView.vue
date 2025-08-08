<script setup lang="ts">
import {useActiveSection} from "@/composables/useActiveSection";
import { watch } from "vue";

import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";
import NierPanel from "@/components/common/NierPanel.vue";
import IntroView from "@/views/IntroView.vue";

const props = defineProps<{
  activeSection: string | null
}>();

const emit = defineEmits<{
  (e: 'update:activeSection', value: string | null): void;
}>();

const { activeSection: observedSection } = useActiveSection(['about', 'projects', 'contact']);

watch(observedSection, (newSection) => {
  emit('update:activeSection', newSection);
});
</script>

<template>
  <section id="home">
    <IntroView/>
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