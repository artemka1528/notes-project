
<script lang="ts" setup>
import {useNotesList} from "../model/useNotesList";
import Note from "@/entities/note/ui/Note.vue";

const {notes} = useNotesList()


</script>

<template>
  <div class="notes" v-if="notes">
    <Note
        v-for="note in notes"
        :key="note.id"
        :id="note.id"
        :title="note.title"
        :text="note.content"
    />
  </div>

</template>

<style lang="scss">
.notes {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  gap: 40px;
  overflow-wrap: break-word;
  padding-top: 40px;
  //word-break: break-all;


  @include md-screen {
    gap: 20px;
  }

  @include sm-screen {
    grid-template-columns: 1fr;
  }

  @include xs-screen {
    padding-top: 20px;
  }

}
</style>
