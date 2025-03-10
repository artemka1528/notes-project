import HttpFactory from '@/shared/api/factory'
import type {GetNotesResponse, AddNoteParams, AddNoteResponse} from "@/entities/note/model/types";

export default class NotesModule extends HttpFactory {
    async getNotes() {
        return await this.get<GetNotesResponse[]>('/api/notes')
    }

    async addNote(data: AddNoteParams) {
        return await this.post<AddNoteResponse>('/api/notes', data)
    }

    async deleteNote(id: string) {
        return await this.delete<[]>(`/api/notes/${id}`)
    }
}
