<script setup lang="ts">

</script>

<template>
  <div class="accented-heading">
    <div class="accent-line"></div>
    <div class="heading-wrapper">
      <h1 class="heading">
        <span class="heading-square" />
        <span class="heading-text"><slot /></span>
      </h1>
    </div>
    <div class="accent-line"></div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.accented-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: var(--accent-heading-width);
  margin-bottom: 2rem;
}

.accent-line:first-of-type {
  margin-bottom: 0.2rem;
}
.accent-line:last-of-type {
  margin-top: 0.2rem;
}

.heading {
  margin: 0;
  display: flex;
  align-items: center; /* vertical alignment */
  padding: .25rem .75rem .25rem .5rem;
  gap: 0.5rem;
  background: var(--nier-dark-sepia);
  color: var(--nier-light-sepia);
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
  font-family: var(--nier-font-family);
  width: 100%;
}

.heading-wrapper {
  background-color: var(--nier-dark-sepia);
}

.accent-line {
  height: 3px;
  background-color: var(--nier-dark-sepia);
}

.heading-square {
  width: 16px;
  height: 16px;
  background-color: var(--nier-light-sepia);
  flex-shrink: 0;
}

.heading-text {
  display: inline-block;
}

.accented-heading,
.heading-wrapper,
.accent-line {
  width: var(--accent-heading-width); /* Lock them together */
}
</style>