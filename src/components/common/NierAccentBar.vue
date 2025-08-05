<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const container = ref<HTMLElement | null>(null);
const containerWidth = ref(0);

// Match this to your actual unit width (segment + dots cluster)
const UNIT_WIDTH = 62;

const computedCount = computed(() =>
    Math.floor(containerWidth.value / UNIT_WIDTH)
);

let resizeObserver: ResizeObserver;

onMounted(() => {
  if (container.value) {
    resizeObserver = new ResizeObserver(([entry]) => {
      containerWidth.value = entry.contentRect.width;
    });
    resizeObserver.observe(container.value);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver) resizeObserver.disconnect();
});
</script>

<template>
  <div class="nier-accent-bar" ref="container">
    <div class="pattern-row">
      <template v-for="i in computedCount" :key="i">
        <div class="segment"></div>
        <div
            v-if="i < computedCount"
            class="dots-triangle"
        >
          <div class="dots-row">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="dots-row center">
            <span class="dot"></span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.pattern-row {
  display: flex;
  align-items: flex-start;
}

.segment {
  width: 12px;
  height: 6px;
  background: var(--nier-separator, #aaa);
  margin-bottom: 5px;
  margin-right: 0.8em;
  margin-left: 0.8em;
}

.dots-triangle {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
  margin-bottom: 0.5em;
  min-width: 24px; /* Controls horizontal spacing */
  transform: translateY(6px);
}

.dots-row {
  display: flex;
  gap: 9px;
  height: 12px;
}

.dots-row.center {
  justify-content: center;
  margin-top: -3px; /* Move up slightly for triangle effect */
}

.dot {
  width: 5px;
  height: 5px;
  background: var(--nier-separator, #aaa);
  border-radius: 50%;
  display: block;
}
</style>