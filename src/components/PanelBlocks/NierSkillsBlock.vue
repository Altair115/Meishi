<script setup lang="ts">
defineProps<{ skills: string[] }>()
</script>

<template>
  <div class="space-y-1">
    <div class="font-semibold">Skills:</div>
    <ul class="list-none pl-0">
      <li v-for="skill in skills" :key="skill">- {{ skill }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>