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
  <div class="twoColumn-layout">
    <section class="twoColumn-left">
      <h1 class="nier-title">ABOUT</h1>

      <h1>Bio</h1>
      <p class="intro">
        I'm a frontend developer passionate about gamedev UI, stylized interfaces, and breathing life into menus. I love experimenting with CSS and drawing from games like NieR.
      </p>

      <h1>Interest</h1>
      <p class="intro">my interest and hobbiess</p>
    </section>

    <section class="twoColumn-right">
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

</style>