import { Container, SubTitle, Title, ViewContent } from '../../styles/styles.global'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Service from '../../services/service'

import { hourData, RequestData } from '../../interfaces/RequestData'
import Header from '../../components/header/header'
import Temperature from '../../components/temperature/temperature'
import TemperatureRow from '../../components/temperatureRow/temperatureRow'
import ConditionsRow from '../../components/conditionsRow/conditionsRow'

export default function City() {
  const [requestData, setRequestData] = useState<RequestData>({})
  const [tempRow, setTempRow] = useState<Array<hourData>>([])
  const [loading, setLoading] = useState(true)
  
  const { city } = useParams()

  useEffect(() => {
   handleGetCityData()
  }, [])
  
  const handleGetCityData = async () => {
    setLoading(true)
    await Service.get(`/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`)
      .then(response => {
        console.log(response.data);
        setRequestData(response.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false);
      }
    )
  }

  useEffect(() => {
    if(requestData.forecast?.forecastday[0].hour[3].temp_c !== undefined){
      const Dawn = { temp_c: requestData.forecast?.forecastday[0].hour[3].temp_c, condition: requestData.forecast?.forecastday[0].hour[3].condition, title: 'dawn' }
      const Morning = { temp_c: requestData.forecast?.forecastday[0].hour[9].temp_c, condition: requestData.forecast?.forecastday[0].hour[9].condition, title: 'morning' }
      const Afternoon = { temp_c: requestData.forecast?.forecastday[0].hour[15].temp_c, condition: requestData.forecast?.forecastday[0].hour[15].condition, title: 'afternoon' }
      const Night = { temp_c: requestData.forecast?.forecastday[0].hour[21].temp_c, condition: requestData.forecast?.forecastday[0].hour[21].condition, title: 'night' } 

      setTempRow([Dawn, Morning, Afternoon, Night])
    }
  }, [requestData.forecast])

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
                minTemperature={requestData.forecast?.forecastday[0].day?.mintemp_c}
                maxTemperature={requestData.forecast?.forecastday[0].day.maxtemp_c}
                condition={requestData.current?.condition.text ? requestData.current?.condition.text : 'Sunny'}
              />
              <TemperatureRow 
                temperatureRows={tempRow}
              />
              <ConditionsRow 
                humidity={requestData.current?.humidity}
                wind={requestData.current?.wind_mph}
                sunrise={requestData.forecast?.forecastday[0].astro.sunrise}
                sunset={requestData.forecast?.forecastday[0].astro.sunset}
              />
            </>
          )
        }
      </ViewContent>
    </Container>
  )
}
