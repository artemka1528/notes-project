export interface LoginParam {
    email: string
    password: string
}

export interface LoginResponse {
    accessToken: string
}

export interface User {
    id: number
    email: string
}


export interface RegisterParam {
    email: string
    password: string
    confirm_password: string
}

export interface RegisterResponse {
    id: number
    email: string
}
