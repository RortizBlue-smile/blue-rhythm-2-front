import axios from 'axios'

const api = axios.create({ baseURL: '', headers: {} })

export { api }