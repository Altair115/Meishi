<script setup lang="ts">
interface Language {
  language: string
  level: string
}
defineProps<{ languages: Language[] }>()
</script>

<template>
  <div class="nier-block">
    <div class="nier-block-title">Languages:</div>
    <div v-for="lang in languages" :key="lang.language" class="nier-row">
      <span class="nier-label">{{ lang.language }}:</span>
      <span class="nier-value">{{ lang.level }}</span>
    </div>
  </div>
</template>

<style scoped>
.nier-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

.nier-block-title {
  font-weight: bold;
  margin-bottom: 4px;
}

.nier-row {
  display: flex;
  justify-content: space-between;
}

.nier-label {
  font-weight: bold;
}

.nier-value {
  text-align: right;
}
</style>