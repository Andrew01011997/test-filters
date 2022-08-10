import axios from 'axios'
import { camelizeInterceptor } from '../interceptors/camelize'
import { decamelizeInterceptor } from '../interceptors/decamelize'

const httpClient = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 0,
    headers: {
        'Content-Type': 'application/json',
    }
})

/**
 * @description needs to camelize success response and rejected one
 */
httpClient.interceptors.response.use(camelizeInterceptor, camelizeInterceptor)

httpClient.interceptors.request.use(decamelizeInterceptor, undefined)

export { httpClient }