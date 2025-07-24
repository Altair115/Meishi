<script setup lang="ts">
import { onMounted, defineEmits, ref } from 'vue'
const emits = defineEmits(['height'])
const bannerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (bannerRef.value) {
    emits('height', bannerRef.value.offsetHeight)
  }
})

//TODO: Add props for background image, title, etc.
</script>

<template>
  <div class="hero-banner">
    <slot  />
  </div>
</template>

<style scoped>
.hero-banner {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #80d0c7, #0093e9);
  color: #fff;
  font-size: 2rem;
  text-align: center;
  box-sizing: border-box;
}
</style>