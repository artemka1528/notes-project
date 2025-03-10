import axios from 'axios';
import UserModule from "@/entities/user/model/api";
import NotesModule from "@/entities/note/model/api";

const axiosIns = axios.create({
    baseURL: 'https://dist.nd.ru',
})

axiosIns.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken')
    if (token) {
        config.headers = config.headers || {}
        config.headers.Authorization = token ? `Bearer ${JSON.parse(token)}` : ''
    }

    return config
})

const $api = {
    users: new UserModule(axiosIns),
    notes: new NotesModule(axiosIns),
}

export { $api, axiosIns }
