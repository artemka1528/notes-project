import {computed, onMounted, ref} from 'vue'
import {useNoteStore} from "@/entities/note/model/store";

export const useNotesList = () => {
    const store = useNoteStore()
    const notes = ref()
    onMounted(async () => {
        await store.getNotes()
        notes.value = store.notes
    })
    return {
        notes: computed(() => store.notes)
    }
}
