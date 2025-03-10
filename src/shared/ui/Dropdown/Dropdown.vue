<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
let dropdownRef = ref(null);

const toggle = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
};

const close = () => {
  isOpen.value = false;
  document.removeEventListener('click', handleClickOutside);
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    close();
  }
};

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="dropdown" ref="dropdownRef">
    <div class="dropdown-trigger" @click="toggle">
      <slot name="trigger"></slot>
    </div>

    <transition name="fade">
      <div v-show="isOpen" class="dropdown-menu">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  z-index: 1000;
  background: var(--dark-middle);
  right: 0;
  border-radius: 12px;
  padding: 40px;
  margin-top: 21px;
  box-shadow: 0 15px 46px rgba(0,0,0,0.6);

  &:before {
    display: block;
    content: '';
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid var(--dark-middle);
    top: -9px;
    right: 20px;
    position: absolute;
  }
}
</style>
