<script lang="ts" setup>

import Input from "@/shared/ui/Input/Input.vue";
import Button from "@/shared/ui/Button/Button.vue";
import TextField from "@/shared/ui/TextField/TextField.vue";
import {useAddNote} from "../model/useAddNote";

const {form, addNote} = useAddNote()
const emit = defineEmits(['closeModal'])
const addNoteAndCloseModal = () => {
  try {
    addNote()
    emit('closeModal')
  } catch (err) {
    console.log(err)
  }
}

</script>

<template>
  <h2 class="h2">Добавление заметки</h2>
  <div class="mt-10 d-flex flex-column gap-6">
    <Input
        v-model="form.title"
        placeholder="Введите название"
        label="Название заметки"
        :type="'text'"
    />
    <TextField  v-model="form.content"
                placeholder="Введите текст"
                label="Текст заметки"
                type="password" />
  </div>
  <div class="d-flex align-center justify-end mt-10">
    <Button
        text="Добавить"
        @click="addNoteAndCloseModal"
    />
  </div>
</template>

<style lang="scss">

</style>

