<script lang="ts" setup>

import LoginForm from "./LoginForm.vue";
import Modal from "@/shared/ui/Modal/Modal.vue";
import {ref} from "vue";
import RegisterForm from "./RegisterForm.vue";
interface ModalProps {
  isModalLogin: boolean
}
withDefaults(defineProps<ModalProps>(), {
})

const emit = defineEmits(['closeModal'])

const isLogin = ref(true)

</script>

<template>
  <Modal :is-open="isModalLogin" @closeModal="emit('closeModal')">
    <LoginForm @closeModal="emit('closeModal')" v-if="isLogin" @isReg="isLogin = false" />
    <RegisterForm @closeModal="emit('closeModal')" v-else @isLogin="isLogin = true" />
  </Modal>
</template>

<style lang="scss">

</style>
