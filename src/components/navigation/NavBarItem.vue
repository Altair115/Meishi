<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { nextTick, computed } from "vue";

const props = defineProps<{
  to: string;
  label: string;
  icon?: string; // Material icon name or symbol
  active?: boolean;
}>();

const router = useRouter();
const route = useRoute();

const isAnchor = computed(() => props.to.startsWith("#"));

function handleClick(event: Event) {
  if (isAnchor.value) {
    event.preventDefault();
    const sectionId = props.to.slice(1);
    if (route.path !== "/") {
      router.push("/").then(() => {
        nextTick(() => scrollToSection(sectionId));
      });
    } else {
      scrollToSection(sectionId);
    }
  }
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <router-link
      :to="isAnchor ? '/' : to"
      class="nier-navbar-link"
      :class="{active}"
      :title="label"
      @click="handleClick"
  >
    <div class="icon-box" v-if="icon">
      <span class="material-icons icon">{{ icon }}</span>
    </div>
    <span class="nav-label">
      <slot>{{ label }}</slot>
    </span>
  </router-link>
</template>

<style scoped>

</style>