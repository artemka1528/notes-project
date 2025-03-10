export interface AddNoteParams {
    title: string
    content: string
}

export interface AddNoteResponse {
    id: number
    title: string
    content: string
}

export interface User {
    id: number
    email: string
    content: string
}

export interface GetNotesResponse {
    id: number
    email: string
    content: string
}
