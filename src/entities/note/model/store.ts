import {$api} from "@/shared/api/api";
import {ref} from "vue";
import {defineStore} from "pinia";
import type {AddNoteParams, User} from "@/entities/note/model/types";

export const useNoteStore = defineStore('notes', () => {
    const notes = ref<User[]>([])

    async function getNotes() {
        return $api.notes.getNotes().then(({data}) => {
            notes.value = data
        })
    }

    function addNote(request: AddNoteParams) {
        return $api.notes.addNote(request).then(() => {
            getNotes()
        })
    }

    function deleteNote(request: string) {
        return $api.notes.deleteNote(request).then(() => {
            getNotes()
        })
    }



    return {
        notes,
        getNotes,
        addNote,
        deleteNote,
    }
})
