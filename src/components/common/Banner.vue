<script setup lang="ts">

</script>

<template>
  <div class="hero-banner">
    <slot>
      <!-- Default content if no slot is provided -->
      <h1>Welcome!</h1>
    </slot>
  </div>
</template>

<style scoped>
.hero-banner {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #80d0c7, #0093e9);
  color: #fff;
  font-size: 2rem;
  text-align: center;
}
</style>