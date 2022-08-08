import axios from 'axios'
import { camelizeInterceptor } from '../interceptors/camelize'

const { API_URL } = process.env

const httpClient = axios.create({
    baseURL: API_URL,
    timeout: 0,
})

/**
 * @description needs to camelize success response and rejected one
 */
httpClient.interceptors.response.use(camelizeInterceptor, camelizeInterceptor)

export { httpClient }