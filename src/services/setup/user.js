import axios from 'axios'

const API_HOST = process.env.VUE_APP_API_HOST

require('../../security/interceptors')

const saveUser = (data) => {
    return axios.post(`${API_HOST}/api/v1/setup/userAdmin`, data)
        .then(response => {
            return response
        })
        .catch(error => {
            return error.response
        })
}

const checkUserExist = () => {
    return axios.get(`${API_HOST}/api/v1/setup/user/checkUserExist`)
        .then(response => {
            return response
        })
        .catch(error => {
            return error.response
        })
}

export default {
    saveUser,
    checkUserExist
}
