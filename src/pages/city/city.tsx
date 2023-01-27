import { Container, SubTitle, Title, ViewContent } from '../../styles/styles.global'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Service from '../../services/service'

import { RequestData } from '../../interfaces/RequestData'
import Header from '../../components/header/header'
import Temperature from '../../components/temperature/temperature'

export default function City() {
  const [requestData, setRequestData] = useState<RequestData>({})
  const [loading, setLoading] = useState(true)
  
  const { city } = useParams()

  useEffect(() => {
   handleGetCityData()
  }, [])
  
  const handleGetCityData = async () => {
    setLoading(true)
    await Service.get(`/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`)
      .then(response => {
        setRequestData(response.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false);
      }
    )
  }

  return (
    <Container>
      <ViewContent>
      <Header />
        {
          loading !== true && (
            <>
              <Title>{city}</Title>
              <SubTitle>{requestData.current?.condition.text}</SubTitle>
              <Temperature 
                actualTemperature={requestData.current?.temp_c}
                minTemperature={requestData.forecast?.forecastday[0].day.mintemp_c}
                maxTemperature={requestData.forecast?.forecastday[0].day.maxtemp_c}
                condition={requestData.current?.condition.text ? requestData.current?.condition.text : 'Sunny'}
              />
            </>
          )
        }
      </ViewContent>
    </Container>
  )
}
