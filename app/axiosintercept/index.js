import axios from 'axios'
const token = '' //token de acesso do usuario

const axiosInstance = axios.create()
axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default axiosInstance