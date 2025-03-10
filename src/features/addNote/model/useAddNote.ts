import { ref } from 'vue'
import {useNoteStore} from "@/entities/note/model/store";

export const useAddNote = () => {

    const store = useNoteStore()

    const form = ref({
        title: '',
        content: '',
    })

    const addNote = async () => {
        if (!form.value.title || !form.value.content) {
            return
        }

        await store.addNote(form.value)

        form.value.title = ''
        form.value.content = ''
    }

    return {
        form,
        addNote,
    }
}
