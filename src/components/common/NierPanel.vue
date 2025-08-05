<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Unset title'
  }
})
</script>

<template>
  <div class="nier-panel">
    <div class="nier-panel_header">
      {{ title }}
    </div>
    <div class="nier-panel_body">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>