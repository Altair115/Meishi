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
      class="navbar-link"
      :title="label"
      @click="handleClick"
  >
    <span v-if="icon" class="material-icons icon">{{ icon }}</span>
    <slot>{{ label }}</slot>
  </router-link>
</template>

<style scoped>
.navbar-link {
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: color .2s;
}
.navbar-link:hover, .router-link-exact-active {
  color: #4fc08d;
}
.icon {
  margin-right: 0.5em;
  font-size: 1.25em;
  vertical-align: middle;
}
.material-icons {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  direction: ltr;
}
</style>