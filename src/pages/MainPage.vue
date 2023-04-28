<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("Main mounted!");
});
</script>
<template>
  <h1>Main Page</h1>
  <slot></slot>
</template>
