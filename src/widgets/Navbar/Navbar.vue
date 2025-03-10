<script lang="ts" setup>
import Icon from '@/shared/ui/Icon/Icon.vue'
import Button from "@/shared/ui/Button/Button.vue";
import {ref} from "vue";
import AuthForm from "@/features/auth/ui/AuthForm.vue";
import {useUserStore} from "@/entities/user/model/store";
import ProfileDropdown from "./ui/ProfileDropdown/ProfileDropdown.vue";

const store = useUserStore()

const isModalLogin = ref(false)

const openModalLogin = () => {
  isModalLogin.value = true;
}


const closeModal = () => {
  isModalLogin.value = false;
}
</script>

<template>
  <div class="navbar gap-1">
    <Icon width="218" height="50" class="logo" name="Logo" />
    <template v-if="store.user">
      <ProfileDropdown :email="store.user.email" />
    </template>
    <template v-else>
      <Button
          @click="openModalLogin"
          text="Вход"
          icon="Login"
      />
      <AuthForm
          v-if="isModalLogin"
          :isModalLogin="isModalLogin"
          @closeModal="closeModal" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;

  @include md-screen {
    padding: 20px 0;
  }
}

.logo {
  min-width: 218px;

  @include xs-screen {
    min-width: 154px;
    height: 36px;
  }
}
</style>
