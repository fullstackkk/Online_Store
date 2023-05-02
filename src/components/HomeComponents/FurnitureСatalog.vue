<script setup lang="ts">
import { ref } from "vue";

const dataArr: string[] = ["", "Badroom", "Living Room", "Dining Room", "Office", "Kitchen", "Sofa"];

let activeBtn = ref(-1);

function clickActive(i: any) {
  activeBtn.value = i;
}
</script>

<template>
  <div class="flex flex-col items-center mt-14">
    <div class="flex gap-6 mb-14">
      <span v-for="i in 6" :key="i" @click="clickActive(i)">
        <button :class="i === activeBtn ? 'active__btn' : 'static__btn'">{{ dataArr[i] }}</button>
      </span>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="flex gap-11">
        <div class="card" v-for="i in 4">{{ i }}</div>
      </div>
      <div class="flex mt-5 gap-11">
        <div class="card" v-for="i in 4">{{ i }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active__btn {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  background: #1d1f23;
  border-radius: 50px;
  padding: 10px 26px 9px 27px;
  margin-top: -8px;
  transition-duration: 0.2s;
}
.static__btn {
  border-bottom: 1px solid #00000000;
  transition-duration: 0.4s;
}
.static__btn:hover {
  border-bottom: 1px solid #1d1f23;
}
.card {
  width: 268px;
  height: 492px;
  background: #000000;
  border-radius: 20px;
}
</style>
