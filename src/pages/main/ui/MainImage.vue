<script lang="ts" setup>
import mainImage from '../assets/main-image.png'
</script>

<template>
  <div>
    <img :src="mainImage" alt="">
  </div>
</template>

<style lang="scss" scoped>
img  {
  width: 100%;
  max-width: 897px;
  height: auto;
}
</style>
