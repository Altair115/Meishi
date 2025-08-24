<script setup lang="ts">

import NierPanel from "@/components/common/NierPanel.vue";
import NierAccentedHeading from "@/components/common/NierAccentedHeading.vue";
import NierStatusMessage from "@/components/PanelBlocks/NierStatusMessage.vue";
</script>

<template>
  <div class="twoColumn-layout">
    <section class="twoColumn-left">
      <h1 class="nier-title">Home</h1>

      <NierAccentedHeading>Why Meishi?</NierAccentedHeading>
      <p class="intro">
        In Japan, the exchange of a meishi, or business card, isn't just practical. It's more like a quiet handshake.
        It marks the beginning of a connection and distills someone's identity into something small and intentional.
        <br><br>
        That’s what inspired me to name this project Meishi. I wanted the site to offer the same kind of thoughtful introduction.
        Whether you're here to explore my work or just get a sense of who I am, I hope it feels like receiving a card I've designed myself.
        <br><br>
        This portfolio is my meishi. It's clean, personal, and built to start conversations.
      </p>
    </section>

    <section class="twoColumn-right">
      <NierPanel title="Definition of Meishi">
        Meishi (名刺) is the Japanese word for a business card, a concise but powerful tool used to represent one’s professional identity.
        Traditionally exchanged during introductions, a meishi conveys much more than contact information—it embodies respect, hierarchy, and formality in Japanese culture.
        <hr class="nier-light-separator" />
        <NierStatusMessage text="DEFINITION READY" />
      </NierPanel>
    </section>
  </div>
</template>

<style scoped>

</style>