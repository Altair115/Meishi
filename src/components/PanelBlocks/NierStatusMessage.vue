<script setup lang="ts">
type Align = 'left' | 'center' | 'right'

const props = withDefaults(
    defineProps<{
      text?: string
      align?: Align
      uppercase?: boolean
    }>(),
    {
      text: 'NO ERROR',
      align: 'center',
      uppercase: true,
    }
)
</script>

<template>
  <div
      class="nier-status"
      :class="`align-${align}`"
      role="status"
      aria-live="polite"
  >
    <span :class="{ uppercase }">{{ text }}</span>
  </div>
</template>

<style scoped>
.nier-status {
  margin: 36px 0 24px;     /* big top, no sides, small bottom */
  /* or 36px 0 12px if you like it roomier */
  padding-top: 0;          /* no extra internal padding needed */
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--nier-dark-sepia);
}

.align-left  { text-align: left; }
.align-center{ text-align: center; }
.align-right { text-align: right; }

.uppercase { text-transform: uppercase; }
</style>