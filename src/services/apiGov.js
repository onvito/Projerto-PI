import axios from 'axios'

const apiCamara = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
    headers: {
        'content-type': 'application/json;charset=utf-8'
    }
})

export default apiCamara