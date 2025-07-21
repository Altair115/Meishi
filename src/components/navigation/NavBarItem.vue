<script setup lang="ts">
defineProps<{
  to: string
  label: string
  icon?: string // Emoji or pass SVG/component later
}>()
</script>

<template>
  <router-link :to="to" class="navbar-link" :title="label">
    <span class="icon" v-if="icon">{{ icon }}</span>
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
  font-size: 1.1em;
  vertical-align: middle;
}
</style>