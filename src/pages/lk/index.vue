<script setup lang="ts">
import NotesManagement from "@/widgets/NotesManagement/NotesManagement.vue";
import {onMounted} from "vue";
import {useUserStore} from "@/entities/user/model/store";


const store = useUserStore()
onMounted(() => {
  try {
    store.getUser()
  } catch (e) {

  }
})
</script>

<template>
  <div class="page">
    <NotesManagement />
  </div>
</template>
