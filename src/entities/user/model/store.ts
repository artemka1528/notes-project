import {$api} from "../../../shared/api/api";
import {defineStore} from "pinia";
import type { LoginParam, RegisterParam, User } from "./types";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null)

    function login(request: LoginParam) {
        return $api.users.login(request).then(({ data }) => {
            if (data.accessToken) {
                localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
            }
        })
    }

    function getUser() {
        return $api.users.getUser().then(({ data }) => {
            if (data) {
                user.value = data
                localStorage.setItem('user', JSON.stringify(data))
            }
        })
    }

    function logOut() {
        return $api.users.logOut().then(() => {})
    }

    function register(data: RegisterParam) {
        return $api.users.register(data).then(() => {})
    }


    return {
        user,
        login,
        getUser,
        logOut,
        register
    }
})
