import axios from 'axios'

import { API_URL } from '@/constants/environment'

const API_URL = 'localhost://3000'

const initHeadersRequest = (paramsHeader) => {
  const configHeader = {
    'Content-Type': 'application/json',
    ...paramsHeader
  }

  const token = localStorage.getItem('@token')

  if (token) {
    configHeader.Authorization = `Bearer ${token}`
  }

  return configHeader
}

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: initHeadersRequest(),
  timeout: 9999
})

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export const axiosProvider = (params) => {
  return axios.create({
    baseURL: API_URL,
    headers: initHeadersRequest(params),
    timeout: 9999
  })
}

export default axiosClient
