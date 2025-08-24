<script setup lang="ts">
import { computed } from 'vue'

type Skill = string | { name: string; level?: string; years?: number }

const props = defineProps<{ skills: Skill[] }>()

const normalized = computed(() =>
    props.skills.map(s => (typeof s === 'string' ? { name: s } : s))
)
</script>

<template>
  <div class="nier-block">
    <div class="nier-block-title">Skills:</div>

    <div v-for="s in normalized" :key="s.name" class="nier-row">
      <span class="nier-label">{{ s.name }}:</span>
      <span class="nier-value">
        <template v-if="s.level">{{ s.level }}</template>
        <template v-else-if="s.years !== undefined">{{ s.years }} yrs</template>
        <template v-else>&nbsp;</template>
      </span>
    </div>
  </div>
</template>

<style scoped>
.nier-block {
  display:flex;
  flex-direction:column;
  gap:4px;
  font-size:14px;

}

.nier-block-title {
  font-weight:bold;
  margin-bottom:4px;
}

.nier-row {
  display:flex;
  justify-content:space-between;
}

.nier-label {
  font-weight:bold;
}

.nier-value {
  text-align:right;
  min-width:120px;
}
</style>