<script setup lang="ts">
import MainImage from "./ui/MainImage.vue";

</script>

<template>
  <div class="page">
    <div class="main-content">
      <h1 class="h1 main-content__title">Мои
        заметки</h1>
      <p class="h3 pb-12 mt-10 main-content__subtitle">Не забывай о важном, храни его в облаке.</p>
    </div>
    <MainImage />
  </div>
</template>

<style lang="scss">
.page {
  display: flex;
  align-items: center;

  @include sm-screen {
    flex-direction: column;
  }
}

.main-content {
  @include sm-screen {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-content__title {
    @include custom-screen(530px) {
      font-size: 60px;
      line-height: 64px;
    }
  }


    &__subtitle {
    width: 100%;
    max-width: 394px;
    color: var(--gray);
    @include custom-screen(530px) {

    }
    @include sm-screen {
      margin-top: 20px;
      max-width: 100%;
      padding-bottom: 0;
    }
  }
}
</style>
