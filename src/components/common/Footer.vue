<script setup lang="ts">
import NierAccentBar from "@/components/common/NierAccentBar.vue";
</script>

<template>
  <footer class="nier-footer">
    <div class="accent-wrapper">
      <NierAccentBar />
    </div>
    <div class="footer-content">
      <span>© 2025 Meishi. All rights reserved.</span>
    </div>
  </footer>
</template>

<style scoped>
.accent-wrapper {
  position: relative;
  height: 0px;
  overflow: visible;
  z-index: 10;
}

.footer-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px; /* 👈 Added to make space for the accent */
}
</style>