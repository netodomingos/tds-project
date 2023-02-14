import { useState, useEffect } from "react";
import { Response } from "../interfaces/RequestData";
import Service from "../services/service";

export default function useCities(city: string){
  const [data, setData] = useState<Response>({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handGetCity()
  }, [city])

  async function handGetCity(){
    setLoading(true)
		await Service.get(`/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`)
			.then((response) => {
				console.log(response);
				setLoading(false)
				setData(response.data)
			})
			.catch((error) => {
				console.log(error);

				setLoading(false)
				setError(error)
			}
		)
  }

  return {
		data, error, loading
  }
}

