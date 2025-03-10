<script setup lang="ts">
import './reset.scss';
import './variables/global.scss';
import './style.scss';
import Navbar from "@/widgets/Navbar/Navbar.vue";
import { onMounted } from "vue";
import { useUserStore } from "@/entities/user/model/store";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useUserStore();

onMounted(async () => {
  try {
    await store.getUser();
    if (localStorage.getItem('accessToken')) {
      router.push('/lk');
    } else {
      router.push('/');
    }
  } catch (e) {
    console.error('Ошибка при загрузке пользователя:', e);
    router.push('/');
  }
});
</script>

<template>
  <header>
    <div class="container">
      <Navbar />
    </div>
  </header>
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>
