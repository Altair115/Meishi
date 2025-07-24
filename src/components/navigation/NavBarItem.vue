<script setup lang="ts">
defineProps<{
  to: string
  label: string
  icon?: string // Use the Material icon name, SVG or Emote (e.g., "home")
}>()
</script>

<template>
  <router-link :to="to" class="navbar-link" :title="label">
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