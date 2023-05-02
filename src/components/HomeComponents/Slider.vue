<script setup lang="ts"></script>

<template>
  <div class="flex mt-20 justify-center items-center gap-11">
    <div class="flex mt-20 justify-center items-center gap-11">
      <div class="card" v-for="i in 4">{{ i }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 268px;
  height: 492px;
  background: #000000;
  border-radius: 20px;
}
</style>
