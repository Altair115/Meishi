<script setup lang="ts">
interface InfoItem {
  label: string
  value: string
}
defineProps<{ info: InfoItem[] }>()
</script>

<template>
  <div class="space-y-1">
    <div v-for="item in info" :key="item.label" class="flex justify-between">
      <span>{{ item.label }}</span>
      <span>{{ item.value }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>