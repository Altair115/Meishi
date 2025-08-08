<script setup lang="ts">

</script>

<template>
  <div class="accented-heading">
    <div class="accent-line"></div>
    <div class="heading-wrapper">
      <h1 class="heading"><slot /></h1>
    </div>
    <div class="accent-line"></div>
  </div>
</template>

<style scoped>
.accented-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: fit-content;
  margin-bottom: 2rem;
}

.accent-line:first-of-type {
  margin-bottom: 0.15rem;
}
.accent-line:last-of-type {
  margin-top: 0.15rem;
}

.heading {
  margin: 0;
  background: var(--nier-dark-sepia);
  color: var(--nier-light-sepia);
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
  font-family: var(--nier-font-family);
  width: 100%;
}

.heading-wrapper {
  padding: .25rem .75rem;
  background-color: var(--nier-dark-sepia);
}

.accent-line {
  height: 3px;
  background-color: var(--nier-dark-sepia);
  width: 100%;
}
</style>