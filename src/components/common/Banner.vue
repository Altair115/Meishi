<script setup lang="ts">
import {onMounted, defineEmits, ref, defineProps, computed} from 'vue'
import { computeSegments, SegmentInput } from '@/utils/bannerGeometry'

const emits = defineEmits(['height'])
const bannerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (bannerRef.value) {
    emits('height', bannerRef.value.offsetHeight)
  }
})

const props = defineProps<{
  segments?: SegmentInput[]
  slantPercent?: number          // now percent of each segment’s width
  imageUrl: string
  imageRightOffset?: string      // e.g. '80%'
  height: number                 // absolute px height
}>()

const defaultSegments: SegmentInput[] = [
  { width: 35, color: '#535145' },
  { width: 5, color: '#cfc9b1', alpha: 0.5 },
  { width: 5, color: '#535145' },
  { width: 55, transparent: true },
]

const svgSegments = computed(() =>
    computeSegments(props.segments ?? defaultSegments, props.slantPercent ?? -15)
)
</script>

<template>
  <div
      ref="bannerRef"
      class="banner-container"
      :style="{
      height: `${height}px`,
      '--image-width': imageRightOffset
    }"
  >
    <div
        class="banner-image"
        :style="{ backgroundImage: `url(${imageUrl})` }"
    />

    <svg
        class="banner-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
    >
      <polygon
          v-for="(seg, i) in svgSegments"
          :key="i"
          :points="seg.points"
          :fill="seg.fill"
      />
    </svg>

    <!-- slot for any overlay content -->
    <div class="banner-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;
}

.banner-image {
  position: absolute;
  right: 0;
  width: 80%;
  height: 100%;
  background-size: cover;
  background-position: center right;
  z-index: 0;
}

.banner-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  shape-rendering: crispEdges;
}

.banner-content {
  position: relative;
  z-index: 2;
  /* center content, or whatever you need… */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
}
</style>