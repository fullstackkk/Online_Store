<script setup lang="ts">
import txtAndSearchBtn from "../components/HomeComponents/TxtAndFindBtn.vue";
import slider from "../components/HomeComponents/Slider.vue";
import informationAboutProduction from "../components/HomeComponents/InformationAboutProduction.vue";
import variosCollectionTxt from "../components/HomeComponents/VariosCollectionTxt.vue";
import furnitureCatalog from "../components/HomeComponents/FurnitureСatalog.vue";
import comments from "../components/HomeComponents/Comments.vue";
import contact from "../components/HomeComponents/ContactUs.vue";
import footerr from "../components/HomeComponents/Footer.vue";
</script>

<template>
  <div class="template__bg"></div>
  <txtAndSearchBtn />
  <slider />
  <informationAboutProduction />
  <variosCollectionTxt />
  <furnitureCatalog />
  <div class="template__bg2"></div>
  <comments />
  <contact />
  <footerr />
</template>
<style scoped>
.template__bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 1008px;
  width: 100%;
  background: url(../assets/bg_top.svg) center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
.template__bg2 {
  position: absolute;
  top: 3152px;
  left: 0;
  height: 602px;
  width: 100%;
  background: url(../assets/bg_bottom.svg) center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
</style>
