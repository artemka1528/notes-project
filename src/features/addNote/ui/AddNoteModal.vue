<script lang="ts" setup>
import Modal from "@/shared/ui/Modal/Modal.vue";
import AddNoteForm from "./AddNoteForm.vue";
interface ModalProps {
  isModal: boolean
}
withDefaults(defineProps<ModalProps>(), {
})

const emit = defineEmits(['closeModal'])


</script>

<template>
  <Modal :is-open="isModal" @closeModal="emit('closeModal')">
    <AddNoteForm @closeModal="emit('closeModal')" />
  </Modal>
</template>

<style lang="scss">

</style>
