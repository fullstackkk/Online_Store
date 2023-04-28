<script setup lang="ts"></script>

<template>
  <div>
    <div class="flex gap-4">
      <router-link to="/catalog">Catalog</router-link>
      <router-link to="/bag">Bag</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>
