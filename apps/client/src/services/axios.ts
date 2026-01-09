import axios from 'axios'

export const _axios = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
})
