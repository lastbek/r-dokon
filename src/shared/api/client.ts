// import { useQueryClient } from '@tanstack/vue-query'
import axios, { type AxiosError } from 'axios'
// import settings from "@/config/settings";
// import queryClient from "./query-client";

// const queryClient = useQueryClient()

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000
})

client.interceptors.request.use((config) => {
//   const token = 'getAccessToken()'
//   if (token !== null) {
    // eslint-disable-next-line no-param-reassign
    // config.headers.Authorization = `Bearer ${token}`
    config.headers['X-role'] = 'CUSTOMER'
//   }

  // config.validateStatus = (status) => status < 500;

  return config
}, errorHandler)

client.interceptors.response.use((response) => {
  if (response.data.status === false && response.data.msg === 'Token expired or Token required') {
    localStorage.clear()
    // queryClient.clear()
    window.location.reload()
  }

  return response.data
}, errorHandler)

export async function errorHandler(error: AxiosError): Promise<void> {
  if (error.response !== null && error.response !== undefined) {
    // server responded with a status code that falls out of the range of 2xx
    if (error.response?.status === 401) {
      window.location.reload()
    }

    await Promise.reject(error.response)
  }
  if (error.request !== null && undefined) {
    // no response received from server
    await Promise.reject(error.request)
  }

  if (error.code === 'ERR_NETWORK') {
    console.log(error)
    await Promise.reject(error.message)
  }

  // something happened in setting up the client
  console.error(error.message)

  console.log('Error config object:', error.config)

  // Using toJSON you get an object with more information about the HTTP error
  console.log('\nError object as json:', error.toJSON())
  console.log(error)
  await Promise.reject(error.response?.data)
}

export default client
