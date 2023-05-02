<script setup lang="ts"></script>

<template>
  <div>
    <div class="mt-44">
      <h5 class="font-bold text-5xl leading-10 text-slate-50 mb-12">What are they saying ?</h5>
      <div class="mb-5">
        <img src="" />
        <p class="font-bold text-xl text-slate-50">Jane Lowis</p>
        <p class="font-normal text-xl text-slate-400">Housewife</p>
      </div>
      <div class="mb-7">
        <p class="font-normal text-xl text-slate-50">
          the services and products offered are very good,<br />matched what I was looking for. now my room is<br />more beautiful
          and aesthetic.
        </p>
      </div>
      <div class="flex gap-5">
        <button class="btn1 w-12 h-12 rounded-full p-3 bg-zinc-800 text-slate-50">&lt</button>
        <button class="btn2 w-12 h-12 rounded-full p-3 bg-red-500 text-slate-50">></button>
      </div>
    </div>
    <div><img src="" /></div>
  </div>
</template>

<style scoped>
.btn1 {
  transition-duration: 0.1s;
}
.btn1:hover {
  transition-duration: 0.25s;
  width: 75px;
  height: 75px;
}
.btn2 {
  transition-duration: 0.1s;
}
.btn2:hover {
  transition-duration: 0.25s;
  width: 75px;
  height: 75px;
}
</style>
