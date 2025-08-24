<script setup lang="ts">
import NierPanel from "@/components/common/NierPanel.vue";
import NierAccentedHeading from "@/components/common/NierAccentedHeading.vue";
import NierInfoBlock from "@/components/PanelBlocks/NierInfoBlock.vue";
import NierSkillsBlock from "@/components/PanelBlocks/NierSkillsBlock.vue";
import NierLanguagesBlock from "@/components/PanelBlocks/NierLanguagesBlock.vue";
import NierStatusMessage from "@/components/PanelBlocks/NierStatusMessage.vue";

const info = [
  { label: "Name:", value: "Kevin / Altair" },
  { label: "Location:", value: "Europe" },
  { label: "Role:", value: "Software Engineer / Programmer" },
]

const skills = [{ name: "C#", level: "Advanced" },
  { name: ".NET", level: "Advanced" },
  { name: "Vue", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Unity", level: "Advanced" },
  { name: "Angular", level: "Intermediate" },
  { name: "RabbitMQ", level: "Intermediate" },
  { name: "Swagger / OpenAPI", level: "Intermediate" },
  { name: "Dependency Injection", level: "Advanced" },
  { name: "Design Patterns", level: "Advanced" },
  { name: "Event-Driven Architecture", level: "Intermediate" },
  { name: "Mirror (Networking)", level: "Intermediate" },
  { name: "Addressables", level: "Intermediate" }
]

const languages = [
  { language: "Dutch",    level: "Native" },
  { language: "English",  level: "Fluent" },
  { language: "Polish",   level: "Conversational" },
  { language: "German",   level: "Basic" },
  { language: "Japanese", level: "learning"}
]
</script>

<template>
  <div class="twoColumn-layout">
    <section class="twoColumn-left">
      <h1 class="nier-title">ABOUT</h1>

      <NierAccentedHeading>Bio</NierAccentedHeading>
      <p class="intro">
        I’m a software engineer who turns fuzzy requirements into clean, testable systems.
        I build maintainable Vue/TypeScript interfaces and .NET/C# services with DI, pragmatic patterns, and event-driven messaging, behind clear OpenAPI contracts.
        I’m not games-first overall, but in my spare time I prototype Unity systems like: RTS tech trees, social-stealth mechanics, and UI recreations, because I like UX that disappears behind good architecture.
        I care about crisp boundaries, readable code, and leaving codebases easier to change than I found them.
        Away from the editor I’m studying Japanese, reading anime/manga, spinning vinyl on an LP setup, and sketching ideas in Clip Studio.
      </p>

      <NierAccentedHeading>Interests</NierAccentedHeading>
      <p class="intro">
        Games · UI/UX · Drawing · Cooking · Japanese · Anime/Manga · Vinyl · PC builds
      </p>
    </section>

    <section class="twoColumn-right">
      <NierPanel title="Status" bottomLabel="NO ERROR">
        <NierInfoBlock :info="info" />
        <hr class="nier-light-separator" />

        <NierSkillsBlock :skills="skills" />
        <hr class="nier-light-separator" />

        <NierLanguagesBlock :languages="languages" />
        <hr class="nier-light-separator" />

        <NierStatusMessage text="PROFILE SYNC READY" />

      </NierPanel>
    </section>
  </div>
</template>

<style scoped>

</style>