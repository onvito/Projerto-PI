import axios from 'axios'

const apiGov = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'accept': 'application/json',
    }
})

export default apiGov