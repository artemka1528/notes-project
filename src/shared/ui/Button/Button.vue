<script lang="ts" setup>

import Icon from '@/shared/ui/Icon/Icon.vue'
import {computed} from "vue"
interface ButtonProps {
  text?: string
  icon?: string
  disabled?: boolean
  className?: string
  variant?: string
}

enum ButtonVariant {
  DEFAULT = 'default',
  TEXT = 'text',
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 24,
  className: '',
  disabled: false,
  variant: ButtonVariant.DEFAULT
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => ({
  'icon-only': !props.text,
  [`variant-${ButtonVariant.DEFAULT}`]: props.variant === ButtonVariant.DEFAULT,
  [`variant-${ButtonVariant.TEXT}`]: props.variant === ButtonVariant.TEXT,
}))
</script>

<template>
  <button
      @click="$emit('click', $event)"
      class="button text-normal"
      :class="[buttonClasses,className, $attrs.class]"
      :disabled="disabled"
      type="button">
    <template v-if="icon">
      <slot name="icon">
        <Icon :name="icon" />
      </slot>
    </template>
    <span v-if="text" class="text-wrapper">
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 32px;
  background: var(--green-light);
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  color: var(--white);
  transition: all .2s;

  &:hover {
    background: var(--green-middle);
  }

  &:active {
    background: var(--green-dark);
  }

  &:disabled {
    background: var(--gray);
  }
}
.button.variant-text {
  background: none;
  color: rgb(177, 201, 9);
  padding: 0;
  transition: all 0.2s;

  &:hover {
    color: rgb(255, 255, 255);
  }
}
.icon-only {
  padding: 20px;
  border-radius: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
}
</style>
