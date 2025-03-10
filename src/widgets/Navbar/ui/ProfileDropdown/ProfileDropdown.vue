<script lang="ts" setup>

import Dropdown from "../../../../shared/ui/Dropdown/Dropdown.vue";
import {defineProps} from "vue";
import Button from "@/shared/ui/Button/Button.vue";
import {useUserStore} from "@/entities/user/model/store";
import { useRouter } from 'vue-router';


const router = useRouter();
interface ProfileDropdownProps {
  email: string;
}

defineProps<ProfileDropdownProps>();

const store = useUserStore()

const logOut = () => {
  store.logOut()
  localStorage.removeItem('accessToken');
  store.user = null
  router.push('/')
}
</script>

<template>
  <div class="d-flex align-center gap-3">
    <span class="text-small ellipsis">{{ email }}</span>
    <Dropdown>
      <template #trigger>
        <Button class-name="profile-dropdown__title" style="background: var(--dark-middle)" icon="User" />
      </template>
      <Button
          @click="logOut"
          text="Выйти"
          variant="text"
      />
    </Dropdown>
  </div>
</template>

<style lang="scss" scoped>
.ellipsis {

  @include custom-screen(530px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: auto;
    max-width: 100px;
  }

  @include xs-screen {
    max-width: 100px;
  }
}

.profile-dropdown__title {
  @include xs-screen {
    max-width: 36px;
    max-height: 36px;
    padding: 9px 11px;
  }
}
</style>
