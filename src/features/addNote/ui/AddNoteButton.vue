<script lang="ts" setup>

import AddNoteModal from "./AddNoteModal.vue";
import Button from "@/shared/ui/Button/Button.vue";
import {ref} from "vue";

const isModalAddNote = ref(false)

const openModalAddNote = () => {
  isModalAddNote.value = true
}

const closeModalAddNote = () => {
  isModalAddNote.value = false
}
</script>

<template>
  <Button class-name="add-note-btn" icon="Add" @click="openModalAddNote" />
  <AddNoteModal :is-modal="isModalAddNote" @closeModal="closeModalAddNote"/>
</template>

<style lang="scss">
.add-note-btn {
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: var(--add-note-z-index);

  @include md-screen {
    right: 12px;
  }

  @include sm-screen {
    right: 8px;
  }
}
</style>
