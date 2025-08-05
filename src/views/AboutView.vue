<script setup lang="ts">
import NierPanel from "@/components/common/NierPanel.vue";

const statusItems = [
  { label: 'Name', value: 'Kevin / Hikoboshi / Altair' },
  { label: 'Based in', value: 'Europe' },
  { label: 'Role', value: 'Software Engineer / Programmer' },
  { label: 'Skills', value: 'Vue, Unity, TypeScript, C#' },
  { label: 'Languages', value: 'Dutch, English, Polish, German, Japanese' },
]
</script>

<template>
  <div class="about-layout">
    <section class="about-left">
      <h1 class="title">ABOUT</h1>

      <h1>Bio</h1>
      <p class="intro">
        I'm a frontend developer passionate about gamedev UI, stylized interfaces, and breathing life into menus. I love experimenting with CSS and drawing from games like NieR.
      </p>

      <h1>Interest</h1>
      <p class="intro">my interest and hobbiess</p>
    </section>

    <section class="about-right">
      <NierPanel title="Status" bottomLabel="NO ERROR">
        <ul class="status-list">
          <li v-for="(item, index) in statusItems" :key="index" class="status-row">
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}</span>
          </li>
        </ul>
      </NierPanel>
    </section>
  </div>
</template>

<style scoped>
.about-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: 1280px;
}

.about-left .title {
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  font-family: var(--nier-font-family); /* match your custom font setup */
  margin-bottom: 2rem;
  color: var(--nier-dark-sepia);
}

.title {
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.4);
  margin-top: 0;
}

.intro {
  max-width: 80%;
  line-height: 1.6;
  font-size: 1rem;
  color: var(--nier-dark-sepia);
}

.status-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.status-row {
  display: flex;
  justify-content: space-between;
  font-family: var(--nier-font-family);
  color: var(--nier-dark-sepia);
  font-size: 0.95rem;
}
</style>