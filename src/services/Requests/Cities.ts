import Service from "../service";

const handleGetCityData = async (city: string) => {
    await Service.get(`/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`)
      .then(response => {
        return response.data
      })
      .catch((error) => {
        console.log(error);
      }
    )
}

export {
    handleGetCityData
}