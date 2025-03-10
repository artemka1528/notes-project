import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export default class HttpFactory {
    private $http: AxiosInstance

    constructor(fetcher: AxiosInstance) {
        this.$http = fetcher
    }

    get<T>(url: string) {
        
        return this.$http.get<T>(url)
    }

    post<T>(url: string, data?: object) {
        return this.$http.post<T>(url, data)
    }

    delete<T>(url: string, config?: AxiosRequestConfig) {
        return this.$http.delete<T>(url, config)
    }
}
