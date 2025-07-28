<script setup lang="ts">
import { onMounted, defineEmits, ref, defineProps} from 'vue'
import type { PropType } from 'vue'
import {convertToRgba} from "@/utils/color";

const emits = defineEmits(['height'])
const bannerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (bannerRef.value) {
    emits('height', bannerRef.value.offsetHeight)
  }
})

const props = defineProps({
  accentColor1: { type: String, default: '#535145' },
  accentColor2: { type: String, default: '#cfc9b1' },
  accentColor3: { type: String, default: '#535145' },
  alpha2: { type: Number, default: 0.4 },
  imageUrl: { type: String, default: '' },
  layerWidths: {
    type: (Array as unknown) as PropType<[string, string, string, string]>,
    default: () => ['20%', '20%', '20%', '40%']
  }
})
</script>

<template>
  <div class="hero-banner" ref="bannerRef">
    <div
        class="layer"
        :style="{
        left: '0%',
        width: layerWidths[0],
        backgroundColor: accentColor1
      }"
    ></div>

    <div
        class="layer"
        :style="{
        left: layerWidths[0],
        width: layerWidths[1],
        backgroundColor: convertToRgba(accentColor2, alpha2)
      }"
    ></div>

    <div
        class="layer"
        :style="{
        left: `calc(${layerWidths[0]} + ${layerWidths[1]})`,
        width: layerWidths[2],
        backgroundColor: accentColor3
      }"
    ></div>

    <div
        class="layer"
        :style="{
        left: `calc(${layerWidths[0]} + ${layerWidths[1]} + ${layerWidths[2]})`,
        width: layerWidths[3],
        backgroundImage: imageUrl ? `url('${imageUrl}')` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    ></div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.layer {
  position: absolute;
  top: 0;
  bottom: 0;
  transform: skewX(20deg);
  transform-origin: top left;
  z-index: 1;
}

.content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem;
  color: white;
  font-size: 2rem;
  text-align: center;
}
</style>