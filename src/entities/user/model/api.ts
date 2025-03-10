import HttpFactory from '@/shared/api/factory'
import type {LoginResponse, User, LoginParam, RegisterResponse, RegisterParam} from "./types";

export default class UserModule extends HttpFactory {
    async login(data: LoginParam) {
        return await this.post<LoginResponse>('/api/auth', data)
    }

    async getUser() {
        return await this.get<User>('/api/auth')
    }

    async logOut() {
        return await this.delete<void>('/api/auth')
    }

    async register(data: RegisterParam) {
        return await this.post<RegisterResponse>('/api/reg', data)
    }
}
