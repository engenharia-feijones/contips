import Axios from 'axios'

const config = {
    baseURL: 'https://traceripapi.azurewebsites.net/api'
}

const axios = Axios.create(config)

export {
  axios
}

export default function setupAxios(app) {
  app.config.globalProperties.$axios = axios
}