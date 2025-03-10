<script lang="ts" setup>
import {defineProps, defineEmits, watch, ref} from "vue";

interface InputProps {
  placeholder?: string;
  type?: string;
  modelValue: string;
  label?: string
  error?: string
}

const props = defineProps<InputProps>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const inputValue = ref<string>(props.modelValue);

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});
watch(() => props.modelValue, (newValue: string) => {
  inputValue.value = newValue
});
</script>

<template>
  <div class="input-container text-small">
    <template v-if="label">
      <span class="input-label">
        {{label}}
      </span>
    </template>

    <input
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        class="input-field text-small"
    >

    <template v-if="error">
      <span  class="input-error">
        {{error}}
      </span>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  outline: none;

  .input-label {
    padding-left: 24px;
    color: var(--gray);
  }

  .input-error {
    padding-left: 24px;
    color: rgb(255, 116, 97);
  }

  .input-field {
    width: 100%;
    height: 72px;
    padding: 0 28px;
    background: var(--white);
    border-radius: 36px;
    box-sizing: border-box;
    border: 2px solid var(--white);
    color: rgb(10, 31, 56);
    transition: all .2s;

    &:hover {
      border: 2px solid var(--green-light);
    }

    &:focus {
      outline: none;
      border: 2px solid var(--green-light);
    }

    &::placeholder {
      color: rgb(157, 165, 175);
    }
  }
}
</style>
