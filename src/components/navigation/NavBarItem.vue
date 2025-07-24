<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { nextTick } from "vue";

const props = defineProps<{
  to: string
  label: string
  icon?: string // Use the Material icon name, SVG or Emote (e.g., "home")
}>();

const router = useRouter();
const route = useRoute();

function handleClick(event: Event) {
  if (props.to.startsWith("#")) {
    event.preventDefault();
    const sectionId = props.to.slice(1);
    if (route.path !== "/") {
      router.push("/").then(() => {
        nextTick(() => {
          scrollToSection(sectionId);
        });
      });
    } else {
      scrollToSection(sectionId);
    }
  }
  // else - let router-link handle normal navigation
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

</script>

<template>
  <router-link
      :to="props.to.startsWith('#') ? '/' : props.to"
      class="nier-navbar-link"
      :title="label"
      @click="handleClick"
  >
    <span v-if="icon" class="material-icons icon">{{ icon }}</span>
    <slot>{{ label }}</slot>
  </router-link>
</template>

<style scoped>

</style>