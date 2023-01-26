import axios from 'axios'

const Service = axios.create({
    baseURL: "http://api.weatherapi.com/v1"
})

export default Service