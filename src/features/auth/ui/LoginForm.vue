<script lang="ts" setup>
import {ref} from "vue";
import Button from "@/shared/ui/Button/Button.vue";
import Input from "@/shared/ui/Input/Input.vue";
import { useRouter } from 'vue-router';
import {useUserStore} from "@/entities/user/model/store";
import {validateForm} from "@/shared/lib/validation";

const store = useUserStore()

const router = useRouter();

const form = ref({
  email: '',
  password: ''
})

const emit = defineEmits(['isReg', 'closeModal'])

const errors = ref<{ email?: string; password?: string; }>({});

const errorLogin = ref('')

const login = () => {
  errors.value = validateForm(form.value)
  if (Object.keys(errors.value).length === 0) {
      store.login(form.value).then(() => {
        router.push('/lk');
        emit('closeModal')
      }).catch((data) => {
        errorLogin.value = data.response.data.message
      })
  }
}
</script>

<template>
  <h2 class="h2">Вход в ваш аккаунт</h2>
  <div class="mt-10 d-flex flex-column gap-6 form-login__content">
    <Input
        v-model="form.email"
        placeholder="Введите значение"
        label="Email"
        :type="'text'"
        :error="errors.email"
    />
    <Input
        v-model="form.password"
        placeholder="Введите значение"
        label="Пароль"
        type="password"
        :error="errors.password"
    />
  </div>
  <div class="d-flex align-center justify-space-between mt-10 form-login__send">
    <p class="d-flex align-center gap-2">У вас нет аккаунта? <Button @click="emit('isReg')" variant="text" class-name="text-small-bold text-small-bold-mob" text="Зарегистрируйтесь" /></p>
    <Button class="form-login__send-btn" @click="login" text="Войти" />
  </div>
  <div v-if="errorLogin" class="form-error text-small pl-5 pr-5 pt-2 pb-2 mt-5">
    {{ errorLogin }}
  </div>
</template>

<style lang="scss">
.form-error {
  border-radius: 24px;
  background: rgba(255, 116, 97, .1);
  color: #FF7461;
}

.form-login {
  &__title {

  }

  &__content {
    @include xs-screen {
      gap: 16px;
      margin-top: 28px;
    }
  }

  &__send {
    color: var(--gray);

    @include custom-screen(545px){
      flex-direction: column-reverse;
      align-items: center;
      margin-top: 28px;
      gap: 20px;
    }

    &-btn {
      @include custom-screen(545px){
        width: 100%;
        justify-content: center;
      }
    }
  }
}
</style>
