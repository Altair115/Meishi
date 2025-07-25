<script setup lang="ts">
defineProps({
  count: { type: Number, default: 24 }, // Number of blocks across
});
</script>

<template>
  <div class="nier-accent-bar">
    <div class="pattern-row">
      <template v-for="i in count" :key="i">
        <div class="segment"></div>
        <!-- Render dots only between segments, not after the last one -->
        <div
            v-if="i < count"
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
.nier-accent-bar {
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
  background: transparent;
  z-index: 5;
}

.pattern-row {
  display: flex;
  align-items: flex-start;
}

.segment {
  width: 16px;
  height: 5px;
  background: var(--nier-separator, #aaa);
  margin-bottom: 3px;
  margin-right: 0.5em;
  margin-left: 0.5em;
}

.dots-triangle {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1px;
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
  margin-top: -2px; /* Move up slightly for triangle effect */
}

.dot {
  width: 5px;
  height: 5px;
  background: var(--nier-separator, #aaa);
  border-radius: 50%;
  display: block;
}

</style>