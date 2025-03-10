<script lang="ts" setup>

import {defineProps} from "vue";
import Button from "../../../shared/ui/Button/Button.vue";
import {useNoteStore} from "../model/store";

interface NoteProps {
  id: string
  title: string
  text: string
}

const props = defineProps<NoteProps>();

const store = useNoteStore()

const deleteNote = () => {
  store.deleteNote(props.id)
}
</script>

<template>
  <div class="note">
    <div class="note__header">
      <h4 class="h4">{{title}}</h4>
    </div>
    <div class="note__body">
      <p class="text-normal text-normal-mob">{{text}}</p>
    </div>
    <div class="note__footer">
      <Button
          @click="deleteNote"
          icon="Close"
          text="Удалить"
          class="btn-delete text-normal"
          variant="text"
      />
    </div>
  </div>


</template>

<style lang="scss" scoped>
.note {
  background: var(--green-light);
  border-radius: 12px;
  position: relative;
  box-shadow: 0 15px 15px rgba(0,0,0,0.4);

  &:before {
    display: block;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: linear-gradient(to top right, var(--green) 50%, var(--dark) 50%);
    border-bottom-left-radius: 12px;
  }

  &__header {
    padding: 20px 28px;
    border-bottom: 1px solid var(--green);
  }

  &__body {
    padding: 20px 28px 28px 28px;
    border-bottom: 1px solid var(--green);
  }

  &__footer {
    padding: 8px;
    padding-right: 32px;
    display: flex;
    justify-content: flex-end;
    .btn-delete {
      color: var(--white);
      color: rgb(255, 255, 255);
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: 0%;
      text-align: left;
    }
    padding-top: 18px;
    padding-bottom: 20px;

    @include xs-screen {
      padding-top: 32px;
      padding-bottom: 20px;
    }
  }
}


</style>
