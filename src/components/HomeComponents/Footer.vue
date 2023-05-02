<script setup lang="ts"></script>

<template>
  <div class="flex justify-between items-center mt-24 w-full h-28 bg-black absolute left-0">
    <div><img src="" /></div>
    <div class="flex gap-11">
      <RouterLink to="/support" class="font-normal text-lg leading-6 text-white">Support</RouterLink>
      <RouterLink to="/privacyPolicy" class="font-normal text-lg leading-6 text-white">Privacy Policy</RouterLink>
      <RouterLink to="/termsAndConditions" class="font-normal text-lg leading-6 text-white">Terms and Conditions</RouterLink>
    </div>
    <div class="txt">
      <p class="font-normal text-lg leading-6 text-white">© 2020 Furnity, All Rights Reserved</p>
    </div>
  </div>
</template>

<style scoped>
.txt {
  margin-right: 120px;
}
</style>
