<script setup lang="ts">
import { onMounted } from "vue";
import { PageTemplate, Header } from "../layouts";
import { AdBlock } from "../components";

onMounted(() => {
  console.log("Main mounted!");
});
</script>
<template>
  <PageTemplate>
    <template #header>
      <Header />
    </template>
    <template #ad><AdBlock class="mt-[22px]" /></template>
    <template #body>
      <div class="flex-1 h-full bg-white">123123</div>
    </template>
  </PageTemplate>
</template>
