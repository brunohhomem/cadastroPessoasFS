import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1/pessoas' // Altere para a URL da sua API
})

export default api
