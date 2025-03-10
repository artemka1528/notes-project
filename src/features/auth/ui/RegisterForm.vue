<script lang="ts" setup>
import {ref} from "vue";
import Button from "@/shared/ui/Button/Button.vue";
import Input from "@/shared/ui/Input/Input.vue";
import {validateForm} from "@/shared/lib/validation";
import {useUserStore} from "@/entities/user/model/store";
import {useRouter} from "vue-router";

const form = ref({
  email: '',
  password: '',
  confirm_password: ''
})

const store = useUserStore()
const router = useRouter()

const emit = defineEmits(['isLogin', 'closeModal'])

const errors = ref<{ email?: string; password?: string; confirm_password?: string }>({});

const errorRegister = ref('')

const register = () => {
    errors.value = validateForm(form.value)
    if (Object.keys(errors.value).length === 0) {
      store.register(form.value).then(() => {
        store.login(
            {
              email: form.value.email,
              password: form.value.password
            }).then(() => {
                router.push('/lk');
                emit('closeModal')
            })

      }).catch((data) => {
        errorRegister.value = data.response.data.message
      })
    }
}
</script>

<template>
  <div>
    <h2 class="h2 form-register__title">Регистрация</h2>
    <div class="mt-10 d-flex flex-column gap-6 form-register__content">
      <Input
          v-model="form.email"
          placeholder="Введите Email"
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
      <Input
          v-model="form.confirm_password"
          placeholder="Введите значение"
          label="Пароль ещё раз"
          type="password"
          :error="errors.confirm_password"
      />
    </div>
    <div class="d-flex align-center justify-space-between gap-5 mt-10 form-register__send"  >
      <p class="d-flex align-center gap-2 text-small">У вас есть аккаунт? <Button @click="emit('isLogin')" variant="text" class-name="text-small-bold" text="Войдите" /></p>
      <Button class="form-register__send-btn" @click="register" text="Зарегистрироваться" />
    </div>
    <div v-if="errorRegister" class="form-error text-small pl-5 pr-5 pt-2 pb-2 mt-5">
      {{ errorRegister }}
    </div>
  </div>
</template>

<style lang="scss">
.form-register {
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

    @include custom-screen(670px){
      flex-direction: column-reverse;
      align-items: center;
      margin-top: 28px;
    }

    &-btn {
      @include custom-screen(670px){
        width: 100%;
        justify-content: center;
      }

      @include xs-screen {
        width: 100%;
        justify-content: center;
      }
    }
  }
}
</style>
