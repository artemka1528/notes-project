<script setup lang="ts">
import {defineProps, defineEmits, ref, onUnmounted} from "vue";
import Button from '../Button/Button.vue'
interface Props {
  isOpen: boolean;
}

defineProps<Props>();
const ANIMATION_DELAY = 300;

const isClosing = ref(false);

let timeoutId = null;

const closeModal = () => {
  isClosing.value = true
  timeoutId = setTimeout(() => {
    emit('closeModal')
    isClosing.value = false
  }, ANIMATION_DELAY)
}

const emit = defineEmits(['closeModal'])

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});
</script>

<template>
  <div
      class="modal"
      :class="{'opened': isOpen, 'isClosing': isClosing}"
      @click="closeModal">
    <div class="overlay">
      <div class="content" @click.stop>
        <Button
            @click="closeModal"
            class-name="close-modal"
            icon="Close"
        />
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
}


.overlay {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto; // Включаем скролл для оверлея
  -webkit-overflow-scrolling: touch; // Плавный скролл на iOS
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.content {
  transition: 0.3s transform;
  transform: scale(0.5);
  position: relative;
  width: 100%;
  max-width: 780px;
  padding: 80px;
  background: var(--dark-middle);
  border-radius: 40px;
  margin: auto;

  @include xs-screen {
    min-height: 100%;
  }

  @include md-screen {
    padding: 56px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @include custom-screen(400px) {
    padding: 24px 16px;
    min-height: 100%;
  }

}
.opened {
  pointer-events: auto;
  opacity: 1;
  z-index: var(--modal-z-index);

  .content {
    transform: scale(1);
  }
}

.isClosing {
  .content {
    transform: scale(0.2);
  }
}

.close-modal {
  position: absolute;
  right: 20px;
  top: 20px;

  @include xs-screen {
    right: 12px;
    top: 12px;
  }
}
</style>
