<template>
  <div class="flex justify-between mt-7">
    <div>
      <router-link to="/home"><img src="src/assets/Logo.svg" /></router-link>
    </div>
    <div class="flex gap-12">
      <router-link to="/home" class="btn font-normal text-sm">Home</router-link>
      <router-link to="/badroom" class="btn font-normal text-sm">Badroom</router-link>
      <router-link to="/livingRoom" class="btn font-normal text-sm">Living Room</router-link>
      <router-link to="/diningRoom" class="btn font-normal text-sm">Dining Room</router-link>
      <router-link to="/Office" class="btn font-normal text-sm">Office</router-link>
      <router-link to="/kitchen" class="btn font-normal text-sm">Kitchen</router-link>
      <router-link to="/sofa" class="btn font-normal text-sm">Sofa</router-link>
    </div>
    <div class="flex gap-9">
      <img class="images" src="src/assets/Search.svg" />
      <router-link to="/basket"><img class="images" src="src/assets/Basket.svg" /></router-link>
    </div>
  </div>
  <router-view />
</template>
<style scoped>
.btn {
  transition-duration: 0.25s;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.btn:hover {
  transition-duration: 0.25s;
  border-bottom: 1px solid rgb(0, 0, 0);
}
.images {
  cursor: pointer;
}
</style>
