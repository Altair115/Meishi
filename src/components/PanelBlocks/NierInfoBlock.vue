<script setup lang="ts">
interface InfoItem {
  label: string
  value: string
}
defineProps<{ info: InfoItem[] }>()
</script>

<template>
  <div class="nier-block">
    <div v-for="item in info" :key="item.label" class="nier-row">
      <span class="nier-label">{{ item.label }}</span>
      <span class="nier-value">{{ item.value }}</span>
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