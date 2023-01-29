import axios from 'axios'

const Service = axios.create({
    baseURL: "https://api.weatherapi.com/v1"
})

export default Service