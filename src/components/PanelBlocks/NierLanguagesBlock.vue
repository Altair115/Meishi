<script setup lang="ts">
interface Language {
  language: string
  level: string
}
defineProps<{ languages: Language[] }>()
</script>

<template>
  <div class="space-y-1">
    <div class="font-semibold">Languages:</div>
    <div v-for="lang in languages" :key="lang.language" class="flex justify-between">
      <span>{{ lang.language }}:</span>
      <span>{{ lang.level }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>